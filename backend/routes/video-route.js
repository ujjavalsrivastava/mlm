const express = require("express");

const { tryCatch } = require("../utils/helper");
const {
  getVideo,
  handleAuthentication,
  handleRedirection,
  createVimeoShowcase,
  getAllCourses,
  getCourseById,
} = require("../controllers/vimeoController");
const router = express.Router();

router.get("/video", tryCatch(getVideo));
router.get("/authorize", tryCatch(handleAuthentication));
router.get("/redirect", tryCatch(handleRedirection));
router.post("/course", tryCatch(createVimeoShowcase));
router.get("/courses", tryCatch(getAllCourses));
router.get("/course/:courseId", tryCatch(getCourseById));

module.exports = router;
