const { Router } = require("express");
const {
  createProductOrder,
  createProduct,
  createRazorpayOrder,
  deleteProduct,
  paymentVerification,
} = require("../controllers/productController");
const { adminAuth } = require("../middleware/auth");
const { tryCatch, asyncHandler } = require("../utils/helper");

const router = new Router();

router.post("/order", tryCatch(asyncHandler(createProductOrder)));
router.post("/create/order", tryCatch(asyncHandler(createRazorpayOrder)));
router.post(
  "/payment-verification",
  tryCatch(asyncHandler(paymentVerification))
);

router.post("/", adminAuth, tryCatch(asyncHandler(createProduct)));
router.delete("/:id", tryCatch(asyncHandler(deleteProduct)));

module.exports = router;
