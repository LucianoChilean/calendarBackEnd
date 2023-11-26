const pino = require('pino');


const logger = pino({
    transport: {
      target: 'pino-pretty'
    },
    options:{
        traslateTime: true,
        ignore: "pid.hostname"
    }
  });

module.exports = logger;