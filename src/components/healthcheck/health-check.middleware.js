const healthCheckMiddleware = (_req, res) => {
  return res.status(200).send({
    response:'!OK'
  });

};

module.exports = healthCheckMiddleware;
