const User = require("../models/user-model");
const LevelPercentage = require("../models/level-percentage-model");
const {
  populateLowerLevel,
  parentPipelineUpToLevel,
} = require("../utils/helper");

const getLowerLevelUsers = async (req, res) => {
  let { userId } = req.body;
  const { _id, role } = req.user;
  if (!userId) {
    userId = _id;
  }

  if (role === "user") {
    let user = await User.findById(userId).exec();
    user = await populateLowerLevel(user, "lowerLevel");
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

module.exports = {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getLevelPercentage,
  updateLevelPercentage,
};
