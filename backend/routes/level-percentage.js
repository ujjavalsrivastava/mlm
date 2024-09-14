const express = require("express");
const {
  getLevelPercentage,
  updateLevelPercentage,
} = require("../controllers/levelController");
const { tryCatch, asyncHandler } = require("../utils/helper");
const router = express.Router();

router.get("/level-percentage", tryCatch(asyncHandler(getLevelPercentage)));
router.post("/level-percentage", tryCatch(asyncHandler(updateLevelPercentage)));
module.exports = router;
