const db = require("../config/db.config");

/**
 * Get All Application
 */
const getAllApplication = async (req, res) => {
  try {
    let applications = await db.query("SELECT * from applications");

    res.status(200).send({
      success: true,
      msg: "All Application Fetch Success",
      data: applications[0],
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
 * New Application
 */
const newApplication = async (req, res) => {
  const { userName, address, city, country, jobID } = req.body;
  const { filename } = req.file;

  if (userName && address && city && country && jobID && filename) {
    try {
      let fileLink = `${process.env.hostUrl}${process.env.PORT}/${filename}`;

      await db.query(
        "INSERT INTO applications (userName, address, city, country, jobID, cv) VALUES (?, ?, ?, ?, ?, ?)",
        [userName, address, city, country, jobID, fileLink]
      );

      return res.status(201).send({
        success: true,
        msg: "Your Is Submited Success",
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        msg: "Internal Server Error",
        error,
      });
    }
  } else {
    return res.status(404).send({
      success: false,
      msg: "Pls Fill Up All Fields",
    });
  }
};

module.exports = { getAllApplication, newApplication };
