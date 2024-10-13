const express = require("express");
const {
  getLevelPercentage,
  updateLevelPercentage,
} = require("../controllers/levelController");
const { asyncHandler } = require("../utils/helper");
const router = express.Router();

router.get("/level-percentage", asyncHandler(getLevelPercentage));
router.post("/level-percentage", asyncHandler(updateLevelPercentage));
module.exports = router;
