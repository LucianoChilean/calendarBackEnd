// const { getConfig, getUser } = require('./context-helper.util');
const datetime = require('./datetime.util');

//TODO: construir respuesta

module.exports = async ({ responseContent, error }) => {
  console.log(responseContent)
  const fechaTermino = datetime.now();


  // Select dictionary data.
  //const {
  //  code,
  //  message,
  //  statusCode,
  //  excludeMonitoring: exclude,
  //  typeResponse
  //} = error ? dictionary[error.code] || dictionary.INTERNAL_ERROR : dictionary.OK_RESPONSE;

  // Base response.
  const response = {
    statusCode,
    data: {
      code,
      message
    }
  }

  // Add payload to data response.
  if (responseContent?.payload) response.data.payload = responseContent.payload;

  // Add session to data response. Por ahora despues se revisa si se cambia
  response.data.session = {
    token,
    fecha: datetime.instance(datetime.now()).format('YYYY-MM-DD'),
    hora: datetime.instance(datetime.now()).format('HH:mm')
  };

 

 

  return response;
};
