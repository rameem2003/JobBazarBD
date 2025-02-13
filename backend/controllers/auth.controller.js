const bcrypt = require("bcrypt");
const db = require("../config/db.config");
/**
 * Login
 */
const login = async (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Login success",
  });
};

/**
 * Register
 */
const register = async (req, res) => {
  const { name, email, password, role = "user" } = req.body;

  db.execute(
    "SELECT * FROM `users` WHERE email = ?",
    [email],
    function (err, results, fields) {
      if (results[0]) {
        res.status(404).send({
          success: false,
          msg: "User Already Exist",
        });
      }
    }
  );

  if (name && email && password) {
    try {
      bcrypt.hash(
        password,
        parseInt(process.env.saltRounds),
        async function (err, hash) {
          // Store hash in your password DB.

          if (err) {
            return res.status(500).send({
              success: false,
              msg: "internal Server Error",
              err,
            });
          } else {
            db.execute(
              "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
              [name, email, hash, role],
              function (err, results, fields) {
                if (err) {
                  return res.status(500).send({
                    success: false,
                    msg: "internal Server Error",
                    err,
                  });
                } else {
                  return res.status(201).send({
                    success: true,
                    msg: "New Account Created Success",
                    results,
                  });
                }
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
              }
            );
          }
        }
      );
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
      msg: "Pls fill up all fiels",
    });
  }
};

module.exports = { login, register };
