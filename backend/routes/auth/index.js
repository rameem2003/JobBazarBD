const { login, register } = require("../../controllers/auth.controller");

const router = require("express").Router();

/**
 * Login Route
 * http://localhost:8000/api/v1/auth/login
 */
router.post("/auth/login", login);

/**
 * Registration Route
 * http://localhost:8000/api/v1/auth/register
 */
router.post("/auth/register", register);

module.exports = router;
