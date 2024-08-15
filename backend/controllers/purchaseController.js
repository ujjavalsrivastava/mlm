const UserPurchase = require("../models/purchase-history-model");
const PercentDistribution = require("../models/percentage-distribution-model");
const { handlePromiseError, getUserId } = require("../utils/helper");
const { oneDayAgo, oneMonthAgo, oneWeekAgo } = require("../utils/dateTime");

const handleProductPurchase = async (req, res) => {};
const getUserProductsAndBalance = async (req, res) => {
  const userId = getUserId(req);
  const [error, productsAndBalance] = await handlePromiseError(
    UserPurchase.findOne({ userId })
  );
  if (error) {
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
    return res
      .status(400)
      .json({ percentDistributionError, productPurchaseError });
  }
  res.json({ productPurchase, percentDistribution });
};

module.exports = {
  handleProductPurchase,
  getUserAccountAndPurcheseHistory,
  getUserPercentDistribution,
  getUserProductsAndBalance,
};
