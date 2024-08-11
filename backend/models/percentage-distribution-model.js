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
      createdAt: {
        type: Date,
        required: true,
        default: new Date(),
      },
    },
  ],
});

const PercentDistribution = model("PercentDistribution", percent);
module.exports = PercentDistribution;
