const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db.config");
/**
 * Login
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    let existUser = await db.query("SELECT * FROM `users` WHERE email = ?", [
      email,
    ]);

    if (existUser[0].length == 0) {
      return res.status(404).send({
        success: false,
        msg: "User Not Found",
      });
    }

    bcrypt.compare(password, existUser[0][0].password, function (err, result) {
      // result == true
      if (err) {
        return res.status(500).send({
          success: false,
          msg: "internal Server Error",
          err,
        });
      } else {
        if (result) {
          let user = {
            id: existUser[0][0].id,
            name: existUser[0][0].name,
            email: existUser[0][0].email,
            role: existUser[0][0].role,
          };

          // job provider
          if (user.role === "job_provider") {
            let token = jwt.sign(user, process.env.jwt_secret, {
              expiresIn: "1h",
            });

            res.cookie("token", token, {
              // httpOnly: true,
              secure: false,
            });
            return res.status(200).send({
              success: true,
              msg: "Job Provider Login Successfully",
              user: user,
              token,
            });
          }
          // if user
          else if (user.role === "user") {
            let token = jwt.sign(user, process.env.jwt_secret, {
              expiresIn: "1d",
            });

            res.cookie("token", token, {
              // httpOnly: true,
              secure: false,
            });
            return res.status(200).send({
              success: true,
              msg: "User Login Successfully",
              user: user,
              token,
            });
          }
        } else {
          return res.status(400).send({
            success: false,
            msg: "Invalid Credentials",
          });
        }
      }
    });
  } else {
    return res.status(500).send({
      success: false,
      msg: "Please Fill Up All Fields",
    });
  }
};

/**
 * Register
 */
const register = async (req, res) => {
  const { name, email, password, role = "user" } = req.body;

  let existUser = await db.query("SELECT * FROM `users` WHERE email = ?", [
    email,
  ]);

  if (existUser[0].length > 0) {
    return res.status(404).send({
      success: false,
      msg: "User Already Exist",
    });
  }

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
            const user = await db.query(
              "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
              [name, email, hash, role]
            );

            return res.status(201).send({
              success: true,
              msg: "New Account Created Success",
              user,
            });
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

/**
 * Verify Job provider
 */
const verifyJobProvider = async (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Job Provider Verified",
  });
};

module.exports = { login, register, verifyJobProvider };
