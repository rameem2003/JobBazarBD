const {
  login,
  register,
  verifyJobProvider,
} = require("../../controllers/auth.controller");
const checkAdminMiddleware = require("../../middlewares/checkAdminMiddleware");

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

/**
 * Verify Admin Route
 * http://localhost:8000/api/v1/auth/verify-admin
 */
router.get("/auth/verify-admin", checkAdminMiddleware, verifyJobProvider);

module.exports = router;
