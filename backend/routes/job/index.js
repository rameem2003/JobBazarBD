const {
  addNewJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
  updateJob,
} = require("../../controllers/job.controller");
const checkAdminMiddleware = require("../../middlewares/checkAdminMiddleware");

const router = require("express").Router();

/**
 * Get All Jobs
 * http://localhost:8000/api/v1/job/all
 */
router.get("/job/all", getAllJobs);

/**
 * Get Single Job
 * http://localhost:8000/api/v1/job/single/:id
 */
router.get("/job/single/:id", getSingleJob);

/**
 * New Job Add Route
 * http://localhost:8000/api/v1/job/create
 */
router.post("/job/create", checkAdminMiddleware, addNewJob);

/**
 * Job Update Route
 * http://localhost:8000/api/v1/job/update/:id
 */
router.patch("/job/update/:id", checkAdminMiddleware, updateJob);

/**
 * Delete Job Route
 * http://localhost:8000/api/v1/job/delete/:id
 */
router.delete("/job/delete/:id", checkAdminMiddleware, deleteJob);

module.exports = router;
