const { Schema, model, Types } = require("mongoose");

const history = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      product: { type: Types.ObjectId, ref: "Product", default: null },
      orderId: { type: String, default: null },
      paymentId: { type: String, default: null },
      paymentMethod: { type: String, default: null },
      signature: { type: String, default: null },
      status: { type: String, default: "pending", required: true }, // pending, created, failed
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const UserPurchase = model("UserPurchase", history);
module.exports = UserPurchase;
