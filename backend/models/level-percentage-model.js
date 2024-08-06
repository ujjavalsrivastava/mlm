const { Schema, model } = require("mongoose");

const percentage = new Schema({
  level0: { type: Number, default: 0 },
  level1: { type: Number, default: 0 },
  level2: { type: Number, default: 0 },
  level3: { type: Number, default: 0 },
  level4: { type: Number, default: 0 },
  level5: { type: Number, default: 0 },
  level6: { type: Number, default: 0 },
  level7: { type: Number, default: 0 },
});

const LevelPercentage = model("LevelPercentage", percentage);
module.exports = LevelPercentage;
