const bankKycModel = require("../models/bank-details-model");
const { getUserId } = require("../utils/helper");

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
    InbankBranch,
    InbankName,
    InifscCode,
  } = req.body;
  try {
    const userId =  getUserId(req);
    let bank = '';
     bank = await bankKycModel.findOne({
      user: userId,
    });

    if(!bank){
       bank = new bankKycModel();
    }

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
    bank.InbankBranch = InbankBranch;
    
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

  const userId =  getUserId(req);
  let bank = await bankKycModel.findOne({ user: userId });

  res.json({ message: "fetch Successful", bank, code: 801 });
};
module.exports = { kycUpdate, fetchkyc };
