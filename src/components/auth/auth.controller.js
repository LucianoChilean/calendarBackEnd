const logger = require('../../util/logger');
const { 
  createUserModule, 
  loginUserModule,  
  reValidateTokenModule } = require('./auth.module');
const createResponse = require('../../util/create-response.util');

//TODO: Se debe construir response y errorResponse

//* Controller para realizar formateo de response de cada endpoint
const createUserController = async() => {
  logger.info('[createUserController] Init controller.');
  const responseContent = await createUserModule();
  // Create response.
  const response = await createResponse({ responseContent });
  console.log(response)
  logger.info('[createUserController] Return success response.');
 //return response;
};

const loginUserController = async () => {
  console.log('AuthController');
  logger.info('[authController] Init controller.');
  const responseContent = await loginUserModule();
  console.log(responseContent);
  // Create response.
  //const response = await createResponse({ responseContent });
  logger.info('[authController] Return success response.');
 // return response;
};

const reValidateTokenController = async () => {
  console.log('AuthController');
  logger.info('[authController] Init controller.');
  const responseContent = await reValidateTokenModule();
  console.log(responseContent);
  // Create response.
  //const response = await createResponse({ responseContent });
  logger.info('[authController] Return success response.');
 // return response;
};

module.exports =  {
  createUserController,
  loginUserController,
  reValidateTokenController
};
