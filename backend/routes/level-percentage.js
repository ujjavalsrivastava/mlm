const express = require("express");
const {
  getLevelPercentage,
  updateLevelPercentage,
} = require("../controllers/levelController");
const router = express.Router();

router.get("/level-percentage", getLevelPercentage);
router.put("/level-percentage", updateLevelPercentage);
module.exports = router;
