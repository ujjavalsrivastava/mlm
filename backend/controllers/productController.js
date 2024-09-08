const Product = require("../models/product-model");
const crypto = require("crypto");
const UserPurchase = require("../models/purchase-history-model");
const { razorpay } = require("../payment/getway");
const { distributeUserPercentage, getUserId } = require("../utils/helper");
const { getAlbumById } = require("../vimeo/helper");

const createRazorpayOrder = async (req, res) => {
  const { amount, currency, receipt } = req.body;

  const options = {
    amount,
    currency,
    receipt,
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

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ msg: "Payment successful" }, 200);
  } else {
    res.status(400).json({ msg: "Payment verification failed" });
  }
};

const createProductOrder = async (req, res) => {
  const { productId, paymentMethod, status, orderId, paymentId, signature } =
    req.body;
  const userId = getUserId(req);
  if (!productId)
    res.status(400).json({ error: "productId is required to make a purchase" });
  const [userPurchaseHistory, product] = await Promise.all([
    UserPurchase.findOne({ userId }),
    Product.findById(productId),
  ]);

  const createProduct = {
    product: product._id,
    orderId,
    paymentId,
    signature,
    paymentMethod,
    status,
  };

  if (!userPurchaseHistory) {
    const addPurchase = await new UserPurchase({
      userId,
      products: [createProduct],
    }).save();
    if (addPurchase._id) {
      return res.json({ message: "Order created successfull", addPurchase });
    }
  } else {
    userPurchaseHistory.products.unshift(createProduct);
    const savedData = await userPurchaseHistory.save();
    await distributeUserPercentage(userId, product.price);
    return res.json({ message: "Order created successfull", savedData });
  }

  res.json(userPurchaseHistory);
};

const createProduct = async (req, res) => {
  const { courseId, price } = req.body;
  const checkName = await Product.findOne({ courseId });
  if (checkName) throw new Error("courseId already exist");
  const product = await new Product({ courseId, price }).save();
  res.json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ message: "deleted successfully" });
};

const getUserCourses = async (req, res) => {
  const userId = getUserId(req);
  const purchaseHistory = await UserPurchase.findOne({ userId }).populate(
    "products.product"
  );
  const products = purchaseHistory?.products;
  if (products?.length) {
    const data = await Promise.all(
      products.map(async ({ product, timestamp, status }) => {
        console.log("product", product);
        const courseId = product.courseId;
        const course = await getAlbumById(courseId);
        if (course.error) return { courseId, error };
        return {
          courseId,
          timestamp,
          status,
          name: course.name,
          description: course.description,
          link: course.link,
          duration: course.duration,
          created_time: course.created_time,
          modified_time: course.modified_time,
          pictures: { ...course.pictures, sizes: {} },
        };
      })
    );
    return res.json(data);
  }
  res.json(products);
};

module.exports = {
  createProductOrder,
  createProduct,
  createRazorpayOrder,
  deleteProduct,
  getUserCourses,
  paymentVerification,
};
