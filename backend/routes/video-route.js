const express = require("express");

const { asyncHandler } = require("../utils/helper");
const {
  getVideo,
  handleAuthentication,
  handleRedirection,
  getAllCourses,
} = require("../controllers/vimeoController");
const router = express.Router();

router.get("/video", asyncHandler(getVideo));
router.get("/authorize", asyncHandler(handleAuthentication));
router.get("/redirect", asyncHandler(handleRedirection));
router.get("/courses", asyncHandler(getAllCourses));

module.exports = router;
