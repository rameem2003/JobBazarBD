const {
  addNewJob,
  getAllJobs,
  getSingleJob,
} = require("../../controllers/job.controller");

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
router.post("/job/create", addNewJob);

module.exports = router;
