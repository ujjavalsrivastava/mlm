const { Schema, model } = require("mongoose");

const levelPercentage = new Schema({
  level1: { type: Number, default: 0 },
  level2: { type: Number, default: 0 },
  level3: { type: Number, default: 0 },
  level4: { type: Number, default: 0 },
  level5: { type: Number, default: 0 },
  level6: { type: Number, default: 0 },
  level7: { type: Number, default: 0 },
  level8: { type: Number, default: 0 },
});

const LevelPerventage = model("LevelPercentage", levelPercentage);
module.exports = LevelPerventage;
