const { getConfig, getUser, addData } = require('./context-helper.util');

const datetime = require('./datetime.util');


module.exports = async ({ responseContent, error }) => {
  const fechaTermino = datetime.now();
  const { sendMonitoring, sendDititalLog, digitalLog, role, dictionary,  } =
    getConfig();
  const user = getUser();
  const token = user?.token || '';

  // Select dictionary data.
  const {
    code,
    message,
    statusCode,
    excludeMonitoring: exclude,
    typeResponse
  } = error ? dictionary[error.code] || dictionary.INTERNAL_ERROR : dictionary.OK_RESPONSE;

  // Base response.
  const response = {
    statusCode,
    data: {
      code,
      message
    }
  };

 

  return response;
};
