const Product = require("../models/product-model");
const UserPurchase = require("../models/purchase-history-model");
const { razorpay } = require("../payment/getway");
const { distributeUserPercentage } = require("../utils/helper");
const getProductOrder = (req, res) => {
  res.send("getProductOrder");
};

const createRazorpayOrder = async (req, res) => {
  const { amount, currency, receipt } = req.body;

  const options = {
    amount,
    currency,
    receipt,
    // receipt: "any unique id for every order",
    payment_capture: 1,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    res.status(400).json({
      message: "Not able to create order. Please try again!",
      error,
    });
  }
};

const createProductOrder = async (req, res) => {
  const { productId, transectionId, paymentMethod, status } = req.body;
  const userId = req.user._id;
  if (!productId)
    res.status(400).json({ error: "ProductId is required to make a purchase" });
  const [userPurchaseHistory, product] = await Promise.all([
    UserPurchase.findOne({ userId }),
    Product.findById(productId),
  ]);

  const createProduct = {
    product: product._id,
    transectionId,
    paymentMethod,
    status,
  };

  if (!userPurchaseHistory) {
    //for older users
    const addPurchase = await new UserPurchase({
      currentAmount: 0,
      userId,
      products: [createProduct],
    }).save();
    if (addPurchase._id) {
      return res.json({ message: "Order created successfull", addPurchase });
    }
  } else {
    userPurchaseHistory.currentAmount =
      userPurchaseHistory.currentAmount - product.price;
    userPurchaseHistory.products.push(createProduct);
    const savedData = await userPurchaseHistory.save();
    await distributeUserPercentage(userId, product.price);
    return res.json({ message: "Order created successfull", savedData });
  }

  res.json(userPurchaseHistory);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const product = await new Product({ name, price }).save();
  res.json(product);
};
const updateProduct = (req, res) => {
  res.send("updateProduct");
};
module.exports = {
  getProductOrder,
  createProductOrder,
  getProduct,
  createProduct,
  updateProduct,
  createRazorpayOrder,
};
