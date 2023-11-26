

const buildInitMiddleware = (config, refreshAuth = true, isClient = false) => {
    return async (req, _res, next) => {
        //TODO: Validar JWT, HEADERS u alguna otra nueva implementación
      next();
    };
  };
  
  module.exports = buildInitMiddleware;
  