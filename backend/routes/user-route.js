const express = require("express");
const { createUser, loginHandler } = require("../controllers/userControlles");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginHandler);

module.exports = router;
