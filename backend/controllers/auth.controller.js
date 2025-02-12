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
  res.status(200).send({
    success: true,
    msg: "Registration success",
  });
};

module.exports = { login, register };
