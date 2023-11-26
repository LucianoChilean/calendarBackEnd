//TODO: Falta agregar control de errores

const { monitoring } = require('../../config/global');

//const operationConfig = {
//  stage: '',
//  stageSequence: 3,
//  operation: '',
//  operationCode: '',
//  typeResponse: ''
//};

const dictionary = {
  OK_RESPONSE: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0000`,
    statusCode: 200,
    message: 'Validación exitosa',
    excludeMonitoring: false,
    typeResponse: 'E'
  },
  INTERNAL_ERROR: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0001`,
    statusCode: 500,
    message: 'Error interno del servidor.'
  },
  BAD_REQUEST: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0002`,
    statusCode: 400,
    message: 'Error en la solicitud.'
  },
  UNAUTHORIZED: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0003`,
    statusCode: 401,
    message: 'Autenticación requerida o token inválido.'
  },
  NOT_FOUND: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0004`,
    statusCode: 404,
    message: 'No existe el recurso especificado.'
  },
  TIMEOUT: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0005`,
    statusCode: 408,
    message: 'Se acabó el tiempo de espera de la solicitud al servicio externo.'
  },
  ERROR_SERVICE: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0006`,
    statusCode: 500,
    message: 'Error en la API saldos per api'
  },
  MONGO_SERVICE_ERROR: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0007`,
    statusCode: 500,
    message: 'Hubo un error al consultar la bd de Mongo'
  },
  EMPTY_DATA: {
    code: `${monitoring.codigoApp}.${operationConfig.operationCode}.0008`,
    statusCode: 404,
    message: 'No se encontraron cuentas para el cliente'
  }
};

module.exports = {
  operationConfig,
  dictionary
};
