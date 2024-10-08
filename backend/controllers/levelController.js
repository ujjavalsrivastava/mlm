const User = require("../models/user-model");
const LevelPercentage = require("../models/level-percentage-model");
const {
  populateLowerLevel,
  parentPipelineUpToLevel,
  getUserId,
  flattenUsers,
  usersJoinedToday,
  joinedToday,
  checkDaysCount,
  collectUserIdsByLevel,
} = require("../utils/helper");
const PercentDistribution = require("../models/percentage-distribution-model");

const getLowerLevelUsers = async (req, res) => {
  let userId = getUserId(req);
  const { role } = req.user;
  if (role === "user") {
    let user = await User.findById(userId).exec();
    user = await populateLowerLevel(user);
    return res.json([user]);
  } else if (role === "admin") {
    const allParentUserIds = await User.find({
      $or: [{ parentId: { $exists: false } }, { parentId: null }],
    });

    const users = [];
    if (Array.isArray(allParentUserIds)) {
      await Promise.all(
        allParentUserIds.map(async (user) => {
          const newUser = await populateLowerLevel(user);
          users.push(newUser);
        })
      );
    }
    return res.json(users);
  }
};

const getUpperLevelUsers = async (req, res) => {
  let userId = getUserId(req);
  let user = await User.aggregate(parentPipelineUpToLevel(userId, 8)).exec();
  res.json({ user });
};

const getLevelPercentage = async (req, res) => {
  const levelPercent = await LevelPercentage.find({});
  res.json(levelPercent);
};

const updateLevelPercentage = async (req, res) => {
  const data = req.body;
  const levels = await LevelPercentage.findOne();
  if (levels) {
    const levelData = { ...levels._doc, ...data };
    delete levelData._id;
    const updated = await LevelPercentage.updateOne(
      {
        _id: levels._id,
      },
      { $set: levelData }
    );
    res.json(updated);
  } else {
    const saveData = await LevelPercentage({ ...levels, ...data }).save();
    res.json(saveData);
  }
};

const getUserGroupStatus = async (req, res) => {
  const userId = getUserId(req);
  let user = await User.findById(userId).exec();
  user = await populateLowerLevel(user);
  const allUsers = flattenUsers(user?.lowerLevel || []);
  const todaysUsers = usersJoinedToday(allUsers);
  const totalGroupUser = allUsers.length || 0;
  const todayGroupUser = [...todaysUsers].length || 0;
  const users = [user, ...allUsers].map((u) => u._id);
  const teamPercent = await PercentDistribution.find({
    userId: { $in: users },
  });

  let todayTeamEarning = 0;
  let totalTeamEarning = 0;
  let total7DaysEarning = 0;
  let total30DaysEarning = 0;
  teamPercent.map((t) => {
    t.purchaseHistory.map((curr) => {
      totalTeamEarning += curr.amount;
      const today = new Date();
      const sevenDaysAgo = new Date(curr.createdAt);

      sevenDaysAgo.setDate(today.getDate() - 7);
      const thirtyDays = new Date();
      thirtyDays.setDate(today.getDate() - 30);

      if (checkDaysCount(curr.createdAt) < 7) {
        total7DaysEarning += curr.amount;
      }
      if (checkDaysCount(curr.createdAt) < 30) {
        total30DaysEarning += curr.amount;
      }
      if (joinedToday(curr)) {
        todayTeamEarning += curr.amount;
      }
    });
  });

  return res.json({
    totalGroupUser,
    todayGroupUser,
    totalTeamEarning,
    todayTeamEarning,
    total7DaysEarning,
    total30DaysEarning,
  });
};

const getEachLevelEarning = async (req, res) => {
  const user = req.user;
  const todayEarning = {};
  const totalEarning = {};
  const userHierarchy = await populateLowerLevel(user);
  const userIdLevelWise = collectUserIdsByLevel(userHierarchy);

  for (const prop in userIdLevelWise) {
    const earnings = await PercentDistribution.find({
      userId: { $in: userIdLevelWise[prop] },
    });
    console.log({ prop }, userIdLevelWise[prop], earnings);
    if (earnings && earnings.length) {
      todayEarning[prop] = 0;
      totalEarning[prop] = 0;
      earnings.forEach((e) => {
        e.purchaseHistory.forEach((e) => {
          if (joinedToday(e)) {
            todayEarning[prop] += e.amount;
          }
          totalEarning[prop] += e.amount;
        });
      });
      if (totalEarning[prop] === 0) {
        delete totalEarning[prop];
        delete todayEarning[prop];
      }
    }
  }

  res.json({ totalEarning, todayEarning });
};

module.exports = {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getLevelPercentage,
  updateLevelPercentage,
  getUserGroupStatus,
  getEachLevelEarning,
};
