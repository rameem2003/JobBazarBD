const {
  newApplication,
  getAllApplication,
} = require("../../controllers/application.controller");
const errorHandleMiddleware = require("../../middlewares/errorHandleMiddleware");
const upload = require("../../middlewares/fileUploadMIddleware");

const router = require("express").Router();

/**
 * Get All Application
 * http://localhost:8000/api/v1/application/all
 */
router.get("/application/all", getAllApplication);

/**
 * New Application Route
 * http://localhost:8000/api/v1/application/new
 */
router.post(
  "/application/new",
  upload.single("cv"),
  errorHandleMiddleware,
  newApplication
);

module.exports = router;
