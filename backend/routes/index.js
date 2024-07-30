const express = require("express");
const { createUser } = require("../controllers/userControlles");

const router = express.Router();

router.post("/user", createUser);

module.exports = router;
