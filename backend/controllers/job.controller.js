const db = require("../config/db.config");

/**
 * Get All Jobs
 */
const getAllJobs = async (req, res) => {
  try {
    let jobs = await db.query("SELECT * from jobs");

    res.status(200).send({
      success: true,
      msg: "All Jobs Fetch Success",
      data: jobs[0],
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

/**
 * Get Single Job
 */
const getSingleJob = async (req, res) => {
  const { id } = req.params;
  try {
    let job = await db.query("SELECT * from jobs WHERE id = ?", [id]);

    res.status(200).send({
      success: true,
      msg: "Job Fetch Success",
      data: job[0],
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

/**
 * Add New Job
 */
const addNewJob = async (req, res) => {
  const {
    title,
    jobRole,
    description,
    minSalary,
    maxSalary,
    jobType,
    companyName,
    city,
    country,
    jobProviderID,
  } = req.body;

  if (
    title &&
    jobRole &&
    description &&
    minSalary &&
    maxSalary &&
    jobType &&
    companyName &&
    city &&
    country &&
    jobProviderID
  ) {
    try {
      let newJob = await db.query(
        "INSERT INTO jobs (title, jobRole, description, minSalary, maxSalary, jobType, companyName, city, country, jobProviderID) VALUES (?, ?, ?, ?, ?, ?, ? , ? , ?, ?)",
        [
          title,
          jobRole,
          description,
          minSalary,
          maxSalary,
          jobType,
          companyName,
          city,
          country,
          jobProviderID,
        ]
      );

      res.status(201).send({
        success: true,
        msg: "New Job Submit Success",
        newJob,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        msg: "internal Server Error",
        error,
      });
    }
  } else {
    return res.status(404).send({
      success: false,
      msg: "Pls fill up all fields",
    });
  }
};

/**
 * Update job post
 */
const updateJob = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    jobRole,
    description,
    minSalary,
    maxSalary,
    jobType,
    companyName,
    city,
    country,
  } = req.body;

  try {
    let targetJOb = await db.query("SELECT * from jobs WHERE id = ?", [id]);

    if (targetJOb[0].length == 0) {
      return res.status(404).send({
        success: false,
        msg: "No Job Found to Update",
      });
    }

    await db.query(
      "UPDATE jobs SET title = ?, jobRole = ?, description = ?, minSalary = ?, maxSalary = ?, jobType = ?, companyName = ?, city = ?, country = ? WHERE id = ?",
      [
        title,
        jobRole,
        description,
        minSalary,
        maxSalary,
        jobType,
        companyName,
        city,
        country,
        id,
      ]
    );

    res.status(200).send({
      success: true,
      msg: "Job Update Success",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

/**
 * Delete Job
 */
const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    let targetJOb = await db.query("SELECT * from jobs WHERE id = ?", [id]);

    if (targetJOb[0].length == 0) {
      return res.status(404).send({
        success: false,
        msg: "No Job Found",
      });
    }

    await db.query("DELETE FROM jobs WHERE id = ?", [id]);
    return res.status(200).send({
      success: true,
      msg: "Job Delete Success",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

module.exports = { getAllJobs, getSingleJob, addNewJob, updateJob, deleteJob };
