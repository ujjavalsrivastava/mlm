const express = require("express");

const { tryCatch, asyncHandler } = require("../utils/helper");
const {
  getVideo,
  handleAuthentication,
  handleRedirection,
  getAllCourses,
} = require("../controllers/vimeoController");
const router = express.Router();

router.get("/video", tryCatch(asyncHandler(getVideo)));
router.get("/authorize", tryCatch(asyncHandler(handleAuthentication)));
router.get("/redirect", tryCatch(asyncHandler(handleRedirection)));
router.get("/courses", tryCatch(asyncHandler(getAllCourses)));

module.exports = router;
