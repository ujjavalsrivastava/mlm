const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
} = require("../controllers/userControlles");
const { auth } = require("../middleware/auth");
const {
  getLowerLevelUsers,
  getUpperLevelUsers,
} = require("../controllers/levelController");
const { handleProductPurchase } = require("../controllers/purchaseController");

const router = express.Router();

router.post("/user/register", createUser);
router.post("/user/login", loginHandler);

// auth required
router.get("/user/profile", auth, getUserProfile);
router.patch("/user/profile", auth, updateProfile);
router.get("/user/lower-users", auth, getLowerLevelUsers);
router.get("/user/upper-users", auth, getUpperLevelUsers);
router.post("/user/purchase", auth, handleProductPurchase);

module.exports = router;
