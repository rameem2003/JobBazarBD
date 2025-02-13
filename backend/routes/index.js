const router = require("express").Router();
const auth = require("./auth");
const job = require("./job");
const application = require("./application");
const baseurl = process.env.baseUrl;

/**
 * Auth route
 * http://localhost:8000/api/v1/auth/
 */
router.use(baseurl, auth);

/**
 * Job route
 * http://localhost:8000/api/v1/job/
 */
router.use(baseurl, job);

/**
 * Application route
 * http://localhost:8000/api/v1/application/
 */
router.use(baseurl, application);

module.exports = router;
