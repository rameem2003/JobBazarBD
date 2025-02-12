const router = require("express").Router();
const auth = require("./auth");
const baseurl = process.env.baseUrl;

/**
 * Auth route
 * http://localhost:8000/api/v1/auth/
 */
router.use(baseurl, auth);

module.exports = router;
