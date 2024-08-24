const { Router } = require("express");
const {
  createProductOrder,
  createProduct,
  createRazorpayOrder,
  deleteProduct,
} = require("../controllers/productController");
const { adminAuth, auth } = require("../middleware/auth");
const { tryCatch } = require("../utils/helper");

const router = new Router();

router.post("/order", tryCatch(createProductOrder));
router.post("/create/order", tryCatch(createRazorpayOrder));
router.post("/", adminAuth, tryCatch(createProduct));
router.delete("/:id", tryCatch(deleteProduct));

module.exports = router;
