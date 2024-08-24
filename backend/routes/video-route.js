const express = require("express");

const { tryCatch } = require("../utils/helper");
const {
  getVideo,
  handleAuthentication,
  handleRedirection,
  getAllCourses,
} = require("../controllers/vimeoController");
const router = express.Router();

router.get("/video", tryCatch(getVideo));
router.get("/authorize", tryCatch(handleAuthentication));
router.get("/redirect", tryCatch(handleRedirection));
router.get("/courses", tryCatch(getAllCourses));

module.exports = router;
