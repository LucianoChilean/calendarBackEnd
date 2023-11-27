//TODO: Falta agregar control de errores


const operationConfig = {
  stage: 'Crear usuario',
  operation: 'Auth',
  operationCode: 'ATH',
  typeResponse: 'T'
};

const dictionary = {
  OK_RESPONSE: {
    code: `${operationConfig.operationCode}.0000`,
    statusCode: 200,
    message: 'Validación exitosa',
    typeResponse: 'E'
  },
  INTERNAL_ERROR: {
    code: `${operationConfig.operationCode}.0001`,
    statusCode: 500,
    message: 'Error interno del servidor.'
  },
  BAD_REQUEST: {
    code: `${operationConfig.operationCode}.0002`,
    statusCode: 400,
    message: 'Error en la solicitud.'
  },
  UNAUTHORIZED: {
    code: `${operationConfig.operationCode}.0003`,
    statusCode: 401,
    message: 'Autenticación requerida o token inválido.'
  },
  NOT_FOUND: {
    code: `${operationConfig.operationCode}.0004`,
    statusCode: 404,
    message: 'No existe el recurso especificado.'
  },
  TIMEOUT: {
    code: `${operationConfig.operationCode}.0005`,
    statusCode: 408,
    message: 'Se acabó el tiempo de espera de la solicitud al servicio externo.'
  },
  ERROR_SERVICE: {
    code: `${operationConfig.operationCode}.0006`,
    statusCode: 500,
    message: 'Error en la API saldos per api'
  },
  MONGO_SERVICE_ERROR: {
    code: `.${operationConfig.operationCode}.0007`,
    statusCode: 500,
    message: 'Hubo un error al consultar la bd de Mongo'
  },
  EMPTY_DATA: {
    code: `${operationConfig.operationCode}.0008`,
    statusCode: 404,
    message: 'No se encontraron cuentas para el cliente'
  }
};

module.exports = {
  operationConfig,
  dictionary
};
