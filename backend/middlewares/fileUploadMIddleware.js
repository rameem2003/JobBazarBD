const multer = require("multer");

// Multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./docs");
  },
  filename: function (req, file, cb) {
    let file_extension = file.originalname.split(".");

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        `.${file_extension[file_extension.length - 1]}`
    );
  },
});

// Multer file filter (restrict file types)
const fileFilter = (req, file, cb) => {
  // Accept only certain file types
  const allowedTypes = ["application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDF file are allowed."), false);
  }
};

// Multer upload instance
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter,
});

module.exports = upload;
