const logger = require('../../util/logger');
const { 
  createUserModule, 
  loginUserModule,  
  reValidateTokenModule } = require('./auth.module');
//const createResponse = require('../../util/create-response.util');


//* Controller para realizar formateo de response de cada endpoint
const createUserController = async () => {
  console.log('CREATEUSER');
  logger.info('[createUserController] Init controller.');
  const response = await createUserModule();
  console.log(response);
  // Create response.
  //const response = await createResponse({ responseContent });
  logger.info('[createUserController] Return success response.');
 return response;
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
