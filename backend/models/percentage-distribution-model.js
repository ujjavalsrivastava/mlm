const { Schema, model, Types } = require("mongoose");

const percent = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
    unique: true,
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
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const PercentDistribution = model("PercentDistribution", percent);
module.exports = PercentDistribution;
