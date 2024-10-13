const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  checkRrefrealcode,
  updateProfile,
  changePassword,
  getUserLevelStatus,
  updateProfilePicture,
  getProfilePicture,
  getInvoice,
  checkUserExist,
  getRewards,
  handleForgotPassword,
  verifyResetCode,
  contectForm,
  handleRewardStore,
  associateList,
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
  handleWithdrawRequest,
  handleUserWithdrawRequest,
  handleWithdrawalApproval,
} = require("../controllers/purchaseController");
const { asyncHandler } = require("../utils/helper");
const { getUserCourses } = require("../controllers/productController");
const { uploadProfilePicture } = require("../utils/storage");
const { adminAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/register", asyncHandler(createUser));
router.post("/login", asyncHandler(loginHandler));
router.post("/forgot-password", asyncHandler(handleForgotPassword));
router.post("/verify-reset-code", asyncHandler(verifyResetCode));
router.post("/contect-form", asyncHandler(contectForm));
router.get("/check-refrealcode", asyncHandler(checkRrefrealcode));
// auth required
router.get("/profile", asyncHandler(getUserProfile));
router.get("/courses", asyncHandler(getUserCourses));
router.post("/profile", asyncHandler(updateProfile));
router.put("/change-password", asyncHandler(changePassword));
router.get("/lower-users", asyncHandler(getLowerLevelUsers));
router.get("/upper-users", asyncHandler(getUpperLevelUsers));
router.post("/purchase", asyncHandler(handleProductPurchase));
router.get("/purchase", asyncHandler(getUserProductsAndBalance));
router.get("/account-purchase", asyncHandler(getUserAccountAndPurcheseHistory));
router.get("/percent-earning", asyncHandler(getUserPercentDistribution));
router.get("/total-earning", asyncHandler(getUserTotalEarning));
router.get("/group-status", asyncHandler(getUserGroupStatus));
router.get("/level-status", asyncHandler(getUserLevelStatus));
router.post(
  "/profile-picture",
  uploadProfilePicture.single("profilePicture"),
  asyncHandler(updateProfilePicture)
);
router.get("/profile-picture", asyncHandler(getProfilePicture));
router.get("/invoice", asyncHandler(getInvoice));
router.get("/valid", asyncHandler(checkUserExist));
router.get("/level-earning", asyncHandler(getEachLevelEarning));
router.get("/rewards", asyncHandler(getRewards));
router.get("/store-reward", asyncHandler(handleRewardStore));
router.post("/withdrawal-request", asyncHandler(handleWithdrawRequest));
router.get("/withdrawal-request", asyncHandler(handleUserWithdrawRequest));
router.post(
  "/withdrawal-approval",
  adminAuth,
  asyncHandler(handleWithdrawalApproval)
);

router.get("/associate-list", adminAuth, asyncHandler(associateList));

module.exports = router;
