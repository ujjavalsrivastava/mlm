const express = require("express");

const userRoutes = require("./BaseRoutes/userRoutes");
const privileges = require("./PrivilegeRoutes")
const router = express.Router();

router.use("/user", userRoutes);
router.use("/privileges", privileges);


module.exports = router;
