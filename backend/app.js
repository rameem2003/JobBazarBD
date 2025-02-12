require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");
const app = express();

// all middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
app.use(router);

// server home
app.get("/", (req, res) => {
  res.status(200).send({
    msg: "JobBazarBD API MySQL",
    developed_by: "Mahmood Hassan Rameem (ROL Studio)",
  });
});

// error route
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
});

module.exports = app;
