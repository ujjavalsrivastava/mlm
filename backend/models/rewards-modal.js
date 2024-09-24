const { Schema, Types, model } = require("mongoose");

const rewardsSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    default: null,
  },
  isMonthlyReward: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Rewards = model("Rewards", rewardsSchema);

module.exports = Rewards;
