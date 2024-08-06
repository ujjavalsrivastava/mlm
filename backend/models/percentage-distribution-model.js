const { Schema, model, Types } = require("mongoose");

const percent = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  purchaseHistory: [
    {
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
    },
  ],
});

const PercentDistribution = model("PercentDistribution", percent);
module.exports = PercentDistribution;
