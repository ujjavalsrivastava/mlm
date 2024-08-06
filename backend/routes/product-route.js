const { Router } = require("express");
const {
  getProductOrder,
  createProductOrder,
  getProduct,
  updateProduct,
  createProduct,
} = require("../controllers/productController");
const { adminAuth, auth } = require("../middleware/auth");

const router = new Router();

router.get("/product/order", auth, getProductOrder);
router.post("/product/order", auth, createProductOrder);
router.post("/product", adminAuth, createProduct);
router.get("/product/:id", auth, getProduct);
router.put("/product/:id", adminAuth, updateProduct);

module.exports = router;
