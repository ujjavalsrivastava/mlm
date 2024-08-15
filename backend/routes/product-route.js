const { Router } = require("express");
const {
  getProductOrder,
  createProductOrder,
  getProduct,
  updateProduct,
  createProduct,
  createRazorpayOrder,
  getProducts,
} = require("../controllers/productController");
const { adminAuth, auth } = require("../middleware/auth");
const { tryCatch } = require("../utils/helper");

const router = new Router();

router.get("/order", tryCatch(getProductOrder));
router.post("/order", tryCatch(createProductOrder));
router.get("/items", tryCatch(getProducts));
router.post("/create/order", tryCatch(createRazorpayOrder));
router.post("/", tryCatch(adminAuth), tryCatch(createProduct));
router.get("/:id", tryCatch(getProduct));
router.put("/:id", tryCatch(adminAuth), tryCatch(updateProduct));

module.exports = router;
