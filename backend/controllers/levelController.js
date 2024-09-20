const User = require("../models/user-model");
const LevelPercentage = require("../models/level-percentage-model");
const {
  populateLowerLevel,
  parentPipelineUpToLevel,
  getUserId,
  flattenUsers,
  usersJoinedToday,
  totalAmountPipeline,
} = require("../utils/helper");
const PercentDistribution = require("../models/percentage-distribution-model");
const { Types } = require("mongoose");

const getLowerLevelUsers = async (req, res) => {
  let { userId } = req.body;
  const { _id, role } = req.user;
  if (!userId) {
    userId = _id;
  }

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
  let { userId } = req.body;
  if (!userId) {
    userId = req.user._id;
  }
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
  const users = allUsers.map((u) => u._id);
  const teamPercent = await PercentDistribution.find({
    userId: { $in: users },
  });
  let totalTeamEarning = 0;
  let total7DaysEarning = 0;
  let total30DaysEarning = 0;
  teamPercent.map((t) => {
    t.purchaseHistory.map((curr) => {
      totalTeamEarning += curr.amount;
      const today = new Date();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(today.getDate() - 7);
      const thirtyDays = new Date();
      thirtyDays.setDate(today.getDate() - 30);
      if (curr.createdAt >= sevenDaysAgo) {
        total7DaysEarning += curr.amount;
      }
      if (curr.createdAt >= thirtyDays) {
        total30DaysEarning += curr.amount;
      }
    });
  });

  const currentDayEarning = await PercentDistribution.aggregate(
    totalAmountPipeline(todaysUsers.map((u) => u._id))
  );

  // let totalTeamEarning = totalEarning.reduce(
  //   (pre, curr) => pre + curr.totalAmount,
  //   0
  // );
  let todayTeamEarning = currentDayEarning.reduce(
    (pre, curr) => pre + curr.totalAmount,
    0
  );

  //  7 day and 30 day team earning

  return res.json({
    totalGroupUser,
    todayGroupUser,
    totalTeamEarning,
    todayTeamEarning,
    total7DaysEarning,
    total30DaysEarning,
  });
};

module.exports = {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getLevelPercentage,
  updateLevelPercentage,
  getUserGroupStatus,
};
