const express = require("express");
const {
  userSignIn,
  
} = require("../../../controllers/BaseControllers/authController");

const router = express.Router();

router.post("/sign-in", userSignIn);
module.exports = router;
