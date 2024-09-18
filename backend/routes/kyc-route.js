const express = require("express");
const multer = require("multer");
const { kycUpdate, fetchkyc } = require("../controllers/kycController");
const { auth } = require("../middleware/auth");
const { tryCatch, asyncHandler } = require("../utils/helper");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/kyc-update",
  auth,
  upload.single("file"),
  tryCatch(asyncHandler(kycUpdate))
);

router.get("/kyc", auth, tryCatch(asyncHandler(fetchkyc)));

module.exports = router;
