const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
  changePassword,
} = require("../controllers/userController");

const {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getUserGroupStatus,
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
router.put("/change-password", tryCatch(changePassword));
router.get("/lower-users", tryCatch(getLowerLevelUsers));
router.get("/upper-users", tryCatch(getUpperLevelUsers));
router.post("/purchase", tryCatch(handleProductPurchase));
router.get("/purchase", tryCatch(getUserProductsAndBalance));
router.get("/account-purchase", tryCatch(getUserAccountAndPurcheseHistory));
router.get("/percent-earning", tryCatch(getUserPercentDistribution));
router.get("/total-earning", tryCatch(getUserTotalEarning));
router.get("/group-status", tryCatch(getUserGroupStatus));

module.exports = router;
