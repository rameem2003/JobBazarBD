require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const morgan = require("morgan");
const app = express();
const db = require("./config/db.config");

// all middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("docs"));
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
