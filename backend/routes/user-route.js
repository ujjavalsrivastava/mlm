const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
  changePassword,
  getUserLevelStatus,
  updateProfilePicture,
  getProfilePicture,
  getInvoice,
  checkUserExist,
  getRewards,
} = require("../controllers/userController");

const {
  getLowerLevelUsers,
  getUpperLevelUsers,
  getUserGroupStatus,
  getEachLevelEarning,
} = require("../controllers/levelController");
const {
  handleProductPurchase,
  getUserAccountAndPurcheseHistory,
  getUserPercentDistribution,
  getUserProductsAndBalance,
  getUserTotalEarning,
} = require("../controllers/purchaseController");
const { tryCatch, asyncHandler } = require("../utils/helper");
const { getUserCourses } = require("../controllers/productController");
const { uploadProfilePicture } = require("../utils/storage");

const router = express.Router();

router.post("/register", tryCatch(asyncHandler(createUser)));
router.post("/login", tryCatch(asyncHandler(loginHandler)));

// auth required
router.get("/profile", tryCatch(asyncHandler(getUserProfile)));
router.get("/courses", tryCatch(asyncHandler(getUserCourses)));
router.post("/profile", tryCatch(asyncHandler(updateProfile)));
router.put("/change-password", tryCatch(asyncHandler(changePassword)));
router.get("/lower-users", tryCatch(asyncHandler(getLowerLevelUsers)));
router.get("/upper-users", tryCatch(asyncHandler(getUpperLevelUsers)));
router.post("/purchase", tryCatch(asyncHandler(handleProductPurchase)));
router.get("/purchase", tryCatch(asyncHandler(getUserProductsAndBalance)));
router.get(
  "/account-purchase",
  tryCatch(asyncHandler(getUserAccountAndPurcheseHistory))
);
router.get(
  "/percent-earning",
  tryCatch(asyncHandler(getUserPercentDistribution))
);
router.get("/total-earning", tryCatch(asyncHandler(getUserTotalEarning)));
router.get("/group-status", tryCatch(asyncHandler(getUserGroupStatus)));
router.get("/level-status", tryCatch(asyncHandler(getUserLevelStatus)));
router.post(
  "/profile-picture",
  uploadProfilePicture.single("profilePicture"),
  tryCatch(asyncHandler(updateProfilePicture))
);
router.get("/profile-picture", tryCatch(asyncHandler(getProfilePicture)));
router.get("/invoice", tryCatch(asyncHandler(getInvoice)));
router.get("/valid", tryCatch(asyncHandler(checkUserExist)));
router.get("/level-earning", tryCatch(asyncHandler(getEachLevelEarning)));
router.get("/rewards", tryCatch(asyncHandler(getRewards)));

module.exports = router;
