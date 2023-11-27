const { setConfig } = require('../util/context-helper.util');
const logger = require('./logger');

const buildInitMiddleware = (config, refreshAuth = true, isClient = false) => {
    return async (req, _res, next) => {
        //TODO: Sanitizar headers
        //TODO: Sanitizar hash
        //TODO: validar headers
        //TODO: Validar JWT
        // Set config to request context.
        setConfig(config);
    
        logger.info({ headers: req.headers }, '[InitMiddleware] Validate common headers.');
        // Validate and sanitize headers.
        //const sanitizedHeaders = await validateHeaders(req, isClient);
    
        // Add sanitized headers to request context.
        //const address = sanitizedHeaders['x-forwarded-for'] || req.connection?.remoteAddress || '::1';
        //const useragent = sanitizedHeaders['user-agent'];
        //* Se agrega nuevas headers
        //context.addHeaders({
        // 
        //});
    
        // Refresh authentication
        //* Generar refresh de hash que se creara en el inicio de sesion
        //await refreshAndFindAuthController(sanitizedHeaders.hash || sanitizedHeaders.hash, refreshAuth);
      next();
    };
  };
  
  module.exports = buildInitMiddleware;
  