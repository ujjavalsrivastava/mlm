const UserPurchase = require("../models/purchase-history-model");
const PercentDistribution = require("../models/percentage-distribution-model");
const { handlePromiseError, getUserId } = require("../utils/helper");
const { oneDayAgo, oneMonthAgo, oneWeekAgo } = require("../utils/dateTime");
const Withdraw = require("../models/withdraw.model");
const BankDetails = require("../models/bank-details-model");
const logger = require("../config/logger");

const requiredKycFields = [
  "fullname",
  "email",
  "mobile",
  "addharNo",
  "addharName",
  "panName",
  "panNo",
  "BankName",
  "accHolderName",
  "ifscCode",
  "accNo",
];

const handleProductPurchase = async (req, res) => {};
const getUserProductsAndBalance = async (req, res) => {
  const userId = getUserId(req);
  const [error, productsAndBalance] = await handlePromiseError(
    UserPurchase.findOne({ userId })
  );
  if (error) {
    logger.error(
      `getUserProductsAndBalance ${userId} ${JSON.stringify(error)}`
    );
    return res.status(400).json({ error });
  }
  res.json(productsAndBalance);
};

const getUserPercentDistribution = async (req, res) => {
  const userId = getUserId(req);

  const [error, percentDistribution] = await handlePromiseError(
    PercentDistribution.findOne({ userId })
  );
  let oneDayEarning = 0;
  let oneWeekEarning = 0;
  let oneMonthEarning = 0;
  let overallEarning = 0;
  if (percentDistribution?.purchaseHistory?.length) {
    percentDistribution.purchaseHistory.forEach((h) => {
      if (h.createdAt > oneDayAgo()) {
        oneDayEarning += h.amount;
      }
      if (h.createdAt > oneWeekAgo()) {
        oneWeekEarning += h.amount;
      }
      if (h.createdAt > oneMonthAgo()) {
        oneMonthEarning += h.amount;
      }
      overallEarning += h.amount;
    });
  }
  if (error) {
    logger.error(
      `getUserPercentDistribution ${userId} ${JSON.stringify(error)}`
    );
    return res.status(400).json({ error });
  }
  res.json({ oneDayEarning, oneWeekEarning, oneMonthEarning, overallEarning });
};
const getUserAccountAndPurcheseHistory = async (req, res) => {
  const userId = getUserId(req);

  const [productPurchaseError, productPurchase] = await handlePromiseError(
    UserPurchase.findOne({
      userId,
    })
  );
  const [percentDistributionError, percentDistribution] =
    await handlePromiseError(PercentDistribution.findOne({ userId }));

  if (productPurchaseError || percentDistributionError) {
    logger.error(
      `getUserAccountAndPurcheseHistory ${userId} ${JSON.stringify({
        percentDistributionError,
        productPurchaseError,
      })}`
    );
    return res
      .status(400)
      .json({ percentDistributionError, productPurchaseError });
  }
  res.json({ productPurchase, percentDistribution });
};

const getUserTotalEarning = async (req, res) => {
  const userId = getUserId(req);
  const userIds = userId.split(",");

  if (Array.isArray(userIds)) {
    const [error, percentDistributions] = await handlePromiseError(
      PercentDistribution.find({ userId: { $in: userIds } })
    );

    if (error) {
      logger.error(`getUserTotalEarning ${userId} ${error}`);
      return res.status(400).json(error);
    }

    const distributions = [];
    percentDistributions.forEach((user) => {
      const userTotalEarning = user.purchaseHistory.reduce(
        (pre, curr) => pre + curr.amount,
        0
      );
      distributions.push({
        userId: user.userId,
        totalEarning: userTotalEarning,
      });
    });
    return res.json(distributions);
  }
  logger.error(
    `getUserTotalEarning ${userId} userIds should be comma seperated user ids in query params`
  );
  res.status(400).json({
    error: "userIds should be comma seperated user ids in query params",
  });
};

const handleWithdrawRequest = async (req, res) => {
  const userId = getUserId(req);
  const { amount, message } = req.body;

  const bankDetails = await BankDetails.findOne({ email: req.user?.email });
  for (let kycDetail of requiredKycFields) {
    if (!bankDetails[kycDetail]) {
      return res
        .status(400)
        .json({ error: "Kyc Not completed", field: kycDetail });
    }
  }
  const userAccount = await UserPurchase.findOne({ userId });
  if (userAccount.currentAmount < amount) {
    return res.status(400).json({ error: "Insufficient Balance" });
  }
  const reqData = { user: userId, amount, message };
  await Withdraw(reqData).save();
  return res
    .status(200)
    .json({ message: "Withdrawal Request has been sent wait for Approval" });
};

const handleUserWithdrawRequest = async (req, res) => {
  const role = req.user.role;
  const userId = getUserId(req);
  let query = { user: userId };
  if (role === "admin") {
    query = {};
  }
  const data = await Withdraw.find(query).populate("user").populate("approvar");
  const bankDetails = await BankDetails.findOne({ user: userId });
  res.json({ ...data, kyc: bankDetails });
};

module.exports = {
  handleProductPurchase,
  getUserAccountAndPurcheseHistory,
  getUserPercentDistribution,
  getUserProductsAndBalance,
  getUserTotalEarning,
  handleWithdrawRequest,
  handleUserWithdrawRequest,
};
