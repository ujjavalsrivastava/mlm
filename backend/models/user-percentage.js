const { Schema, model, Types } = require("mongoose");

const percent = new Schema({
  percent: { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
  receiverId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  senderId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const percentDistribution = model("percentDistribution", percent);
module.exports = percentDistribution;
