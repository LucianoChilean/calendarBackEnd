const { Router: eRouter } = require('express');
const healthCheckMiddleware = require('./health-check.middleware');

const router = eRouter();
router.get('/healthcheck', healthCheckMiddleware);

router.post('/healthcheck', healthCheckMiddleware);

module.exports = router;
