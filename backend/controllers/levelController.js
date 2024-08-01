const User = require("../models/user-model");
const { mongoose } = require("mongoose");

const getLowerLevelUsers = async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId).populate("lowerLevel");
  res.json({ users: user.lowerLevel });
};

const getUpperLevelUsers = async (req, res) => {
  const { userId } = req.body;
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

module.exports = { getLowerLevelUsers, getUpperLevelUsers };
