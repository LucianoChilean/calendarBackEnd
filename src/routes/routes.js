const { Router: eRouter } = require('express');


const healthcheckRoute = require('../components/healthcheck/health-check.route');
const authRoute = require('../components/auth/auth.route');

const router = eRouter();

router.use(healthcheckRoute);
router.use(authRoute);


module.exports = router;