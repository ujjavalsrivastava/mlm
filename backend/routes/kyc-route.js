const express = require("express");
const multer = require("multer");
const { kycUpdate } = require("../controllers/kycController");
const { auth } = require("../middleware/auth");

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

router.post("/kyc-update", auth, upload.single("file"), kycUpdate);

module.exports = router;
