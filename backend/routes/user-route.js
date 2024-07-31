const express = require("express");
const {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
} = require("../controllers/userControlles");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginHandler);

// auth required
router.get("/profile", auth, getUserProfile);
router.patch("/profile", auth, updateProfile);

module.exports = router;
