const User = require("../models/user-model");
const LevelPerventage = require("../models/level-percentage-model");
const { mongoose } = require("mongoose");
const { allLowerLevelUsersPipeLine } = require("../utils/helper");

const getLowerLevelUsers = async (req, res) => {
  let { userId } = req.body;
  const { _id, role } = req.user;
  if (!userId) {
    userId = _id;
  }

  let user = [];
  if (role === "user") {
    user = await User.aggregate(allLowerLevelUsersPipeLine(userId)).exec();
  } else if (role === "admin") {
    const allParentUserIds = await User.find(
      {
        $or: [{ parentId: { $exists: false } }, { parentId: null }],
      },
      { _id: 1 }
    );
    if (Array.isArray(allParentUserIds)) {
      await Promise.all(
        allParentUserIds.map(async (uid) => {
          console.log(uid.id);

          const newUser = await User.aggregate(
            allLowerLevelUsersPipeLine(uid._id)
          );
          console.log({ newUser });

          user.push(newUser);
        })
      );
    }
  }
  res.json(user);
};

const getUpperLevelUsers = async (req, res) => {
  let { userId } = req.body;
  if (!userId) {
    userId = req.user._id;
  }
  const pipeline = [
    {
      $match: { _id: new mongoose.Types.ObjectId(userId) },
    },
    {
      $graphLookup: {
        from: "users",
        startWith: "$parentId",
        connectFromField: "parentId",
        connectToField: "_id",
        as: "parentUsers",
        maxDepth: 6, // Fetch up to 7 levels including the starting user
        depthField: "level",
      },
    },
    {
      $addFields: {
        upperLevels: {
          $sortArray: {
            input: "$upperLevels",
            sortBy: { level: 1 },
          },
        },
      },
    },
  ];
  let user = await User.aggregate(pipeline).exec();
  res.json({ user });
};

const getLevelPercentage = async (req, res) => {
  const levelPercent = await LevelPerventage.find({});
  res.json(levelPercent);
};

const updateLevelPercentage = async (req, res) => {
  const data = req.body;
  const saveData = await LevelPerventage(data).save();
  res.json(saveData);
};

module.exports = {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getLevelPercentage,
  updateLevelPercentage,
};
