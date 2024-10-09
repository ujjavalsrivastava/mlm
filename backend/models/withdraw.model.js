const { Schema, Types, model } = require("mongoose");

const withdrawSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "pending", required: true }, //pending, accepted, rejected
  admin: { type: Types.ObjectId, ref: "User", default: null },
  message: { type: String, default: null },
  adminRemark: { type: String, default: null },
});

const Withdraw = model("Withdraw", withdrawSchema);

module.exports = Withdraw;
