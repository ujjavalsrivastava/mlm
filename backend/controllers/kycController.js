const bankKycModel = require("../models/bank-details-model");

const kycUpdate = async (req, res) => {
  const user = req.user;
  const {
    fullname,
    email,
    mobile,
    document,
    addharNo,
    addharName,
    panName,
    panNo,
    BankName,
    accHolderName,
    accNo,
    ifscCode,
    InaccountNumber,
    Inbank,
    InbankName,
    InifscCode,
  } = req.body;
  try {
    const bank = await bankKycModel.findOne({
      email: user.email,
    });

    bank.fullname = fullname;
    bank.email = email;
    bank.mobile = mobile;
    bank.document = document;
    bank.addharNo = addharNo;
    bank.addharName = addharName;
    bank.panName = panName;
    bank.panNo = panNo;
    bank.BankName = BankName;
    bank.accHolderName = accHolderName;
    bank.accNo = accNo;
    bank.ifscCode = ifscCode;
    bank.Inbank = Inbank;
    bank.InbankName = InbankName;
    bank.InaccountNumber = InaccountNumber;
    bank.InifscCode = InifscCode;
    await bank.save();

    res.json({ message: "Kyc Updated Successfully", bank });
  } catch (error) {
    console.log({ error });
    res.json({ message: error, code: 802 });
  }
};

const fetchkyc = async (req, res) => {
  const user = req.user;
  let bank = await bankKycModel.findOne({ email: user.email });

  res.json({ message: "fetch Successful", bank, code: 801 });
};
module.exports = { kycUpdate, fetchkyc };
