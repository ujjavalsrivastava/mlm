const express = require("express");
const {
  getLevelPercentage,
  updateLevelPercentage,
} = require("../controllers/levelController");
const { tryCatch } = require("../utils/helper");
const router = express.Router();

router.get("/level-percentage", tryCatch(getLevelPercentage));
router.put("/level-percentage", tryCatch(updateLevelPercentage));
module.exports = router;
