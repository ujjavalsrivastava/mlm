const crypto = require("crypto");
const { Types, ObjectId } = require("mongoose");
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
async function populateLowerLevel(user, counter = 0) {
  if (!user.lowerLevel || user.lowerLevel.length === 0 || counter > 7) {
    return user;
  }
  await user.populate("lowerLevel");
  const [lowerLevelUsersError, lowerLevelUsers] = await handlePromiseError(
    Promise.all(
      user.lowerLevel.map(async (lowerUser) => {
        return populateLowerLevel(lowerUser, ++counter);
      })
    )
  );
  if (lowerLevelUsersError) user.lowerLevel = lowerLevelUsers;
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

const distributeUserPercentage = async (
  associateId,
  amount,
  userLevelShare
) => {
  const [userError, user] = await handlePromiseError(
    User.aggregate(parentPipelineUpToLevel(associateId, 9)).exec()
  );
  const allUser = user[0]?.parentUsers;

  const eachLevelShareList = levels.map((l) => userLevelShare[l] || 0);

  for (let a = 0; a <= allUser.length; a++) {
    const calculateAmountForUser =
      (amount / 100) * eachLevelShareList[a].toFixed(2);

    const everyUserId = allUser[a]?._id;

    if (calculateAmountForUser && everyUserId) {
      const dataForPerventageDistribution = {
        percent: eachLevelShareList[a],
        amount: calculateAmountForUser,
        senderId: associateId,
        receiverId: everyUserId,
      };
      const [otherUserPurchase, userPercentage] = await Promise.all([
        UserPurchase.findOne({
          userId: everyUserId,
        }),
        PercentDistribution.findOne({
          userId: everyUserId,
        }),
      ]);

      if (otherUserPurchase) {
        otherUserPurchase.currentAmount += calculateAmountForUser;
        await otherUserPurchase.save();
      }

      if (userPercentage) {
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

function flattenUsers(userArray) {
  let flatList = [];
  userArray.forEach((user) => {
    if (user.email) flatList.push(user); // Add the current user to the flat list
    if (user.lowerLevel && user.lowerLevel.length > 0) {
      flatList = flatList.concat(flattenUsers(user.lowerLevel)); // Recursively flatten lowerLevel users
    }
  });
  return flatList;
}

const joinedToday = (user) => {
  const userCreatedDate = user.createdAt?.toISOString()?.split("T")[0];
  const currentDate = new Date().toISOString().split("T")[0];
  return userCreatedDate === currentDate;
};

const checkDaysCount = (date) => {
  const now = new Date();
  const cTime = new Date(date);
  return Math.abs(now - cTime) / (1000 * 60 * 60 * 24);
};

const usersJoinedToday = (users) => users.filter(joinedToday);

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

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

const collectUserIdsByLevel = (user, level = 0, result = {}) => {
  if (!result[level]) {
    result[level] = [];
  }
  if (!user.email) return result;
  result[level].push(user._id);

  user.lowerLevel.forEach((lowerUser) => {
    collectUserIdsByLevel(lowerUser, level + 1, result);
  });
  return result;
};

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
  asyncHandler,
  joinedToday,
  checkDaysCount,
  collectUserIdsByLevel,
};
