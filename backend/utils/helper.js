const crypto = require("crypto");
const { Types } = require("mongoose");
const LevelPercentage = require("../models/level-percentage-model");
const User = require("../models/user-model");
const PercentDistribution = require("../models/percentage-distribution-model");
const UserPurchase = require("../models/purchase-history-model");
const levels = Array.from({ length: 8 }, (_, i) => `level${i}`);

const handlePromiseError = async (promise) =>
  await promise.then((data) => [null, data]).catch((error) => [error, null]);

// Function to generate a unique referral code
function generateReferralCode(len = 8) {
  const randomString = crypto.randomBytes(4).toString("hex"); // 8 characters long
  const hash = crypto.createHash("sha256");
  hash.update(randomString);
  const referralCode = hash.digest("hex").substring(0, len); // 8 characters long
  return referralCode;
}

// Function to recursively populate lowerLevel
async function populateLowerLevel(user) {
  if (!user.lowerLevel || user.lowerLevel.length === 0) {
    return user;
  }

  await user.populate("lowerLevel");

  const [lowerLevelUsersError, lowerLevelUsers] = await handlePromiseError(
    Promise.all(
      user.lowerLevel.map(async (lowerUser) => {
        return populateLowerLevel(lowerUser);
      })
    )
  );
  if (lowerLevelUsersError)
    console.log("lowerLevelUsersError", lowerLevelUsersError);

  user.lowerLevel = lowerLevelUsers;
  return user;
}

const parentPipelineUpToLevel = (userId, level) => {
  const pipeline = [
    {
      $match: { _id: new Types.ObjectId(userId) },
    },
    {
      $graphLookup: {
        from: "users",
        startWith: "$parentId",
        connectFromField: "parentId",
        connectToField: "_id",
        as: "parentUsers",
        maxDepth: level - 2, // Fetch up to level 8-1(user)-1(zero-index) = 7 levels including the starting user
        depthField: "level",
      },
    },
    {
      $addFields: {
        parentUsers: {
          $sortArray: {
            input: "$parentUsers",
            sortBy: { level: 1 },
          },
        },
      },
    },
  ];
  return pipeline;
};

const distributeUserPercentage = async (associateId, amount) => {
  const [shareError, userLevelShare] = await handlePromiseError(
    LevelPercentage.findOne()
  );
  const [userError, user] = await handlePromiseError(
    User.aggregate(parentPipelineUpToLevel(associateId, 8)).exec()
  );
  const parentUsers = user[0]?.parentUsers;
  const associateUser = { ...user[0] };
  delete associateUser.parentUsers;
  const allUser = [associateUser, ...parentUsers];
  const eachLevelShareList = levels.map((l) => userLevelShare[l] || 0);

  for (let a = 0; a <= allUser.length; a++) {
    const currentUser = allUser[a];
    let [userCurrentPurchase, userPercentage] = currentUser
      ? await Promise.all([
          UserPurchase.findOne({
            userId: currentUser._id,
          }),
          PercentDistribution.findOne({ userId: currentUser._id }),
        ])
      : [];
    const calculateAmountForUser = (amount / 100) * eachLevelShareList[a];
    if (!userCurrentPurchase && currentUser) {
      [_, userCurrentPurchase] = await handlePromiseError(
        UserPurchase({ userId: currentUser._id })
      );
    }

    if (calculateAmountForUser && userCurrentPurchase && currentUser) {
      userCurrentPurchase.currentAmount += calculateAmountForUser;
      userCurrentPurchase.save();
      const dataForPerventageDistribution = {
        percent: eachLevelShareList[a],
        amount: calculateAmountForUser,
        senderId: associateId,
        receiverId: currentUser._id,
      };
      if (!userPercentage) {
        await new PercentDistribution({
          userId: currentUser._id,
          purchaseHistory: [dataForPerventageDistribution],
        }).save();
      } else {
        userPercentage.purchaseHistory.unshift(dataForPerventageDistribution);
        await userPercentage.save();
      }
    }
  }
};

function tryCatch(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log("error in tryCatch", JSON.stringify(error));

      next(error);
    }
  };
}

const getUserId = (req) => req.query?.userId || req.user?._id;

const flattenUsers = (user) => {
  let flatUsers = [user];
  user.lowerLevel.forEach((subUser) => {
    flatUsers = flatUsers.concat(flattenUsers(subUser));
  });
  return flatUsers;
};

function usersJoinedToday(users) {
  const currentDate = new Date().toISOString().split("T")[0];
  return users.filter((user) => {
    const dateOnly = user.createdAt.toISOString().split("T")[0]; // Extract the date part (YYYY-MM-DD)
    return dateOnly === currentDate; // Keep only those that don't match the current date
  });
}

const totalAmountPipeline = (userIds) => [
  {
    $match: {
      userId: { $in: userIds }, // Match the list of users by userId
    },
  },
  {
    $unwind: "$purchaseHistory", // Decompose purchaseHistory array
  },
  {
    $group: {
      _id: "$userId", // Group by userId
      totalAmount: { $sum: "$purchaseHistory.amount" }, // Sum the amount for each user
    },
  },
];

module.exports = {
  generateReferralCode,
  populateLowerLevel,
  parentPipelineUpToLevel,
  distributeUserPercentage,
  handlePromiseError,
  tryCatch,
  getUserId,
  flattenUsers,
  usersJoinedToday,
  totalAmountPipeline,
};
