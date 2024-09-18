const bankKycModel = require("../models/bank-details-model");

const kycUpdate = async (req, res) => {
  try {
    const user = req.user;

    const kycData = 
    {  
   fullname: req.body.fullname,
   email: req.body.email,
   mobile: req.body.mobile,
   document: req.body.document,
   addharNo: req.body.addharNo,
   addharName: req.body.addharName,
   panName: req.body.panName,
   panNo: req.body.panNo,
   BankName: req.body.BankName,
   accHolderName: req.body.accHolderName,
   accNo: req.body.accNo,
   ifscCode: req.body.ifscCode,
   Inbank: req.body.Inbank,
   InbankName: req.body.InbankName,
   InaccountNumber: req.body.InaccountNumber,
   InifscCode: req.body.InifscCode,
 }
   
      const bank = await bankKycModel.findOne({
        email: user.email,
      });

      bank.fullname = req.body.fullname;
      bank.email=req.body.email;
      bank.mobile=req.body.mobile;
      bank.document=req.body.document;
      bank.addharNo=req.body.addharNo;
      bank.addharName= req.body.addharName;
      bank.panName=req.body.panName;
      bank.panNo= req.body.panNo;
      bank.BankName= req.body.BankName;
      bank.accHolderName=req.body.accHolderName;
      bank.accNo=req.body.accN;
      bank.ifscCode=req.body.ifscCode;
      bank.Inbank= req.body.Inbank;
      bank.InbankName= req.body.InbankName;
      bank.InaccountNumber= req.body.InaccountNumber;
      bank.InifscCode=req.body.InifscCode;
      await bank.save();
  
    res.json({ message: "Kyc Updated Successfully", bank });
  } catch (error) {
    console.log({ error });
    res.json({ message: error, code: 802 });
  }
};

const fetchkyc = async (req, res) => {
  const user = req.user;
  console.log(user);
  let bank = await bankKycModel.findOne({ email: user.email });
  // if (!bank) {
  //   bank = await bankKycModel({
  //     email: user.email,
  //     user: user._id,
  //     mobile: user.mobile,
  //     fullname: user.name,
  //   });
  // }
  res.json({ message: "fetch Successful", bank, code: 801 });
};
module.exports = { kycUpdate, fetchkyc };
