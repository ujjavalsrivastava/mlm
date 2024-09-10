const multer = require("multer");

const path = require("path");

const profilePictureStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder for the images
    cb(null, "uploads/profile_pictures/");
  },
  filename: (req, file, cb) => {
    // Set the file name (e.g., userId + file extension)
    const ext = path.extname(file.originalname);
    cb(null, req.user._id + ext);
  },
});

const uploadProfilePicture = multer({
  storage: profilePictureStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG and PNG images are allowed"));
    }
  },
});

module.exports = {
  uploadProfilePicture,
};
