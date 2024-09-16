const { Schema, model, Types } = require("mongoose");
const typeString = { type: String, default: null };
const typeNumber = { type: Number, default: null };

const bank = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true, unique: true },
  fullname: typeString,
  email: typeString,
  mobile: typeNumber,
  document: typeString,
  addharNo: typeNumber,
  addharName: typeString,
  panName: typeString,
  panNo: typeString,
  BankName: typeString,
  accHolderName: typeString,
  accNo: typeString,
  ifscCode: typeString,
  bank: [
    {
      Inbank: typeString,
      InbankName: typeString,
      InaccountNumber: typeNumber,
      InifscCode: typeString,
      file: { type: Buffer },
    },
  ],
});

const bankDetails = new model("bankDetails", bank);
module.exports = bankDetails;
