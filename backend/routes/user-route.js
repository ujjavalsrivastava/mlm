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
} = require("../controllers/purchaseController");
const { tryCatch } = require("../utils/helper");

const router = express.Router();

router.post("/user/register", tryCatch(createUser));
router.post("/user/login", tryCatch(loginHandler));

// auth required
router.get("/user/profile", tryCatch(auth), tryCatch(getUserProfile));
router.patch("/user/profile", tryCatch(auth), tryCatch(updateProfile));
router.get("/user/lower-users", tryCatch(auth), tryCatch(getLowerLevelUsers));
router.get("/user/upper-users", tryCatch(auth), tryCatch(getUpperLevelUsers));
router.post("/user/purchase", tryCatch(auth), tryCatch(handleProductPurchase));
router.get(
  "/user/account-purchase",
  tryCatch(auth),
  tryCatch(getUserAccountAndPurcheseHistory)
);

module.exports = router;
