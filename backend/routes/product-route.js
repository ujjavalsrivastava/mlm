const { Router } = require("express");
const {
  getProductOrder,
  createProductOrder,
  getProduct,
  updateProduct,
  createProduct,
  createRazorpayOrder,
} = require("../controllers/productController");
const { adminAuth, auth } = require("../middleware/auth");
const { tryCatch } = require("../utils/helper");

const router = new Router();

router.get("/product/order", tryCatch(auth), tryCatch(getProductOrder));
router.post("/product/order", tryCatch(auth), tryCatch(createProductOrder));
router.post("/create/order", tryCatch(auth), tryCatch(createRazorpayOrder));
router.post("/product", tryCatch(adminAuth), tryCatch(createProduct));
router.get("/product/:id", tryCatch(auth), tryCatch(getProduct));
router.put("/product/:id", tryCatch(adminAuth), tryCatch(updateProduct));

module.exports = router;
