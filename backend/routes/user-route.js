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

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginHandler);

// auth required
router.get("/profile", auth, getUserProfile);
router.patch("/profile", auth, updateProfile);
router.get("/lower-users", auth, getLowerLevelUsers);
router.get("/upper-users", auth, getUpperLevelUsers);

module.exports = router;
