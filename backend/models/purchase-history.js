const { Schema, model, Types } = require("mongoose");

const history = new Schema(
  {
    amount: { type: Number, default: 0 },
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    itemId: {
      type: "String",
    },
    transectionId: { type: String, default: null },
    paymentMethod: { type: String, default: null },
    status: { type: String, default: "pending", required: true },
  },
  { timestamps: true }
);

const purchaseHistory = model("purchaseHistory", history);
module.exports = purchaseHistory;
