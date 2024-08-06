const { Schema, model, Types } = require("mongoose");
const typeString = { type: String };
const typeNumber = { type: Number };

const bank = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  addharCard: { username: typeString, number: typeNumber },
  panCard: { username: typeString, number: typeNumber },
  bank: [
    {
      username: typeString,
      bankName: typeString,
      accountNumber: typeNumber,
      ifscCode: typeString,
      document: { type: Buffer },
    },
  ],
});

const bankDetails = new model("bankDetails", bank);
module.exports = bankDetails;
