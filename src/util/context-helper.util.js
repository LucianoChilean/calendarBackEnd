const datetime = require('./datetime.util');
const { set, get } = require('express-http-context');
// all code from here on has access to the same context for each request


/**
 * The context allows to keep the information centralized
 * to share with the components during the execution of a
 * request.
 */
const CONTEXT_KEY = {
  CONFIG: 'CONFIG',
  DATA: 'DATA',
  HEADERS: 'HEADERS',
  USER: 'USER',
  BODY: 'BODY',
};

/**
 * Set operation configuration to monitoring and add headers.(stage and operation)
 * @param { Object } config Configuration.(*.config.js)
 */
const setConfig = ({ operationConfig, dictionary  }) => {
  const {  stage, operation,...config } = operationConfig;

  set(CONTEXT_KEY.CONFIG, {
    ...config,
    dictionary
  });

  set(CONTEXT_KEY.DATA, {
    fechaInicio: datetime.now(),
    stage,
    operation
  });

  set(CONTEXT_KEY.HEADERS, {
   
  });
};

/**
 * Get operation configuration.
 * @returns Configuration.
 */
const getConfig = () => get(CONTEXT_KEY.CONFIG);

/**
 * Get common headers for external service requests.
 * @returns Common headers.
 */
const getHeaders = () => get(CONTEXT_KEY.HEADERS);

/**
 * Get common headers for external service requests and include additional headers.
 * @param { Object } additionalHeaders Additional headers to concatenate.
 * @returns Common headers with additional headers.
 */
const getHeadersAndInclude = (additionalHeaders) => ({
  ...get(CONTEXT_KEY.HEADERS),
  ...additionalHeaders
});

/**
 * Add common headers for external service requests.
 * @param { Object } headers Headers
 */
const addHeaders = (headers) => {
  const currentHeaders = get(CONTEXT_KEY.HEADERS);
  set(CONTEXT_KEY.HEADERS, {
    ...currentHeaders,
    ...headers
  });
};

/**
 * Remove common header for external service requests.
 * @param { String } key Header name.
 */
const removeHeader = (key) => {
  const currentHeaders = get(CONTEXT_KEY.HEADERS);
  if (currentHeaders.hasOwnProperty(key)) {
    delete currentHeaders[key];
    set(CONTEXT_KEY.HEADERS, currentHeaders);
  }
};

/**
 * Get authenticated user data.
 * @returns User data
 */
const getUser = () => get(CONTEXT_KEY.USER);

/**
 * Set authenticated user data.
 * @param { Object } user User data.
 */
const setUser = (user) => {
  set(CONTEXT_KEY.USER, user);
};

/**
 * Get post request data.
 * @returns body request
 */
const getBody = () => get(CONTEXT_KEY.BODY);

/**
 * Set request body.
 * @param { Object } body request body.
 */
const setBody = (body) => {
  set(CONTEXT_KEY.BODY, body);
};

/**
 * Get post request data.
 * @returns log digital data request
 */
const getDataLogDigital = () => get(CONTEXT_KEY.LOGDIGITAL);

/**
 * Set request data log digital.
 * @param { Object } data request data log digital.
 */
const setDataLogDigital = (data) => {
  set(CONTEXT_KEY.LOGDIGITAL, data);
};

/**
 * Add additional data.
 * @param { Object } data Data object to add.
 */
const addData = (data) => {
  const currentData = get(CONTEXT_KEY.DATA);
  set(CONTEXT_KEY.DATA, {
    ...currentData,
    ...data
  });
};

/**
 * Get additional data.
 * @returns Data object.
 */
const getData = () => get(CONTEXT_KEY.DATA);

module.exports = {
  setConfig,
  getConfig,
  getHeaders,
  getHeadersAndInclude,
  getUser,
  addHeaders,
  setUser,
  getBody,
  setBody,
  removeHeader,
  addData,
  getData,
  getDataLogDigital,
  setDataLogDigital
};
