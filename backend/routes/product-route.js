const { Router } = require("express");
const {
  createProductOrder,
  createProduct,
  createRazorpayOrder,
  deleteProduct,
  paymentVerification,
} = require("../controllers/productController");
const { adminAuth } = require("../middleware/auth");
const { asyncHandler } = require("../utils/helper");

const router = new Router();

router.post("/order", asyncHandler(createProductOrder));
router.post("/create/order", asyncHandler(createRazorpayOrder));
router.post("/payment-verification", asyncHandler(paymentVerification));

router.post("/", adminAuth, asyncHandler(createProduct));
router.delete("/:id", asyncHandler(deleteProduct));

module.exports = router;
