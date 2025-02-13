const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "jobbazarbd",
});

db.query("SELECT 1")
  .then(() => {
    console.log("Connected to MySQL");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
