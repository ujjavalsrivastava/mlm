const bankKycModel = require("../models/bank-details-model");

const kycUpdate =   async(req,res)=>{

    const {fullname, email, mobile, document, addharNo,addharName,panName,panNo,BankName,accHolderName,accNo,ifscCode,Inbank,InbankName,InaccountNumber,InifscCode,file } = req.body;
    try{
    const bank = await bankKycModel.findOne({ email });
    const user = req.user._id;
    if (bank)
      return res
        .status(400)
        .json({ error: "Kyc already exist" });
    const resquest = {
        user,
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
        bank:[
            {
                Inbank,
                InbankName,
                InaccountNumber,
                InifscCode,
                file
            }
        ],
       

    };
       const bankKyc = await new bankKycModel(resquest).save();
       console.log(' bankKyc '+ bankKyc);
       return res.status(200).json({code: 801, message: "KYC created successfully" });

} catch (error) {
    console.log({ error });
    res.json({ message: error,code: 802 });
  }
}

const Fetchkyc = async(req,res)=>{
    try{
        const email = req.user.email;
        const bank = await bankKycModel.findOne({ email });
        res.json({ message: "fetch Successful", token, code: 801 });
} catch (error) {
    console.log({ error });
    res.json(error);
  } 
}
module.exports = { kycUpdate,Fetchkyc };
