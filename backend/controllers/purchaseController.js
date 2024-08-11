const UserPurchase = require("../models/purchase-history-model");
const PercentDistribution = require("../models/percentage-distribution-model");
const { handlePromiseError } = require("../utils/helper");

const handleProductPurchase = async (req, res) => {};
const getUserAccountAndPurcheseHistory = async (req, res) => {
  let { userId } = req.body;
  if (!userId) {
    userId = req.user._id;
  }

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

module.exports = { handleProductPurchase, getUserAccountAndPurcheseHistory };
