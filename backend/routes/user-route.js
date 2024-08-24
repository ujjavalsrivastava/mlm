const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");
const {
  getLowerLevelUsers,
  getUpperLevelUsers,
} = require("../controllers/levelController");
const {
  handleProductPurchase,
  getUserAccountAndPurcheseHistory,
  getUserPercentDistribution,
  getUserProductsAndBalance,
  getUserTotalEarning,
} = require("../controllers/purchaseController");
const { tryCatch } = require("../utils/helper");
const { getUserCourses } = require("../controllers/productController");

const router = express.Router();

router.post("/register", tryCatch(createUser));
router.post("/login", tryCatch(loginHandler));

// auth required
router.get("/profile", tryCatch(getUserProfile));
router.get("/courses", tryCatch(getUserCourses));
router.patch("/profile", tryCatch(updateProfile));
router.get("/lower-users", tryCatch(getLowerLevelUsers));
router.get("/upper-users", tryCatch(getUpperLevelUsers));
router.post("/purchase", tryCatch(handleProductPurchase));
router.get("/purchase", tryCatch(getUserProductsAndBalance));
router.get("/account-purchase", tryCatch(getUserAccountAndPurcheseHistory));
router.get("/percent-earning", tryCatch(getUserPercentDistribution));
router.get("/total-earning", tryCatch(getUserTotalEarning));

module.exports = router;
