const User = require("../models/user-model");
const LevelPerventage = require("../models/level-percentage-model");
const { mongoose } = require("mongoose");

const getLowerLevelUsers = async (req, res) => {
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
        startWith: "$lowerLevel",
        connectFromField: "lowerLevel",
        connectToField: "_id",
        as: "lowerLevel",
        depthField: "level",
      },
    },
  ];
  const user = await User.aggregate(pipeline).exec();
  res.json({ user });
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
        startWith: "$upperLevel",
        connectFromField: "upperLevel",
        connectToField: "_id",
        as: "upperLevels",
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
