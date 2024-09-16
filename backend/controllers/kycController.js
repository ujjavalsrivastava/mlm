const bankKycModel = require("../models/bank-details-model");

const kycUpdate = async (req, res) => {
  try {
    const bank = await bankKycModel.findOneAndUpdate(
      { user: req.user._id },
      { ...req.body }
    );
    res.json({ message: "Kyc Updated Successfully", bank });
  } catch (error) {
    console.log({ error });
    res.json({ message: error, code: 802 });
  }
};

const fetchkyc = async (req, res) => {
  const user = req.user;
  let bank = await bankKycModel.findOne({ user: user._id });
  if (!bank) {
    bank = await bankKycModel({
      email: user.email,
      user: user._id,
      mobile: user.mobile,
      fullname: user.name,
    });
  }
  res.json({ message: "fetch Successful", bank, code: 801 });
};
module.exports = { kycUpdate, fetchkyc };
