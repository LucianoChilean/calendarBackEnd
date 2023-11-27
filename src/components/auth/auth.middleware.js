const logger = require('../../util/logger');
const { createUserController, 
    loginUserController, 
    reValidateTokenController } = require('./auth.controller');
const { setBody } = require('../../util/context-helper.util');



// * Middleware (Para agregar validación particular por cada endpoint)
const createUserMiddleware =  async (req, res) => {

    logger.info('[authMiddleware] Init middleware.');
    setBody(req.body);
    const response = await createUserController();
    // Send response.
    logger.info('[authMiddleware] Send success response.');
    return res.status(200).send({ok:true});
   
  };

 const loginUserMiddleware =  async (_req, res) => {

    logger.info('[authMiddleware] Init middleware.');
  
  
       await loginUserController();
  
    // Send response.
    logger.info('[authMiddleware] Send success response.');
    //return res.status(response.statusCode).send(response.data);
    return res.json({
      ok:true
    })
  };

  const reValidateTokenMiddleware =  async (_req, res) => {

    logger.info('[authMiddleware] Init middleware.');
  
  
       await reValidateTokenController();
  
    // Send response.
    logger.info('[authMiddleware] Send success response.');
    //return res.status(response.statusCode).send(response.data);
    return res.json({
      ok:true
    })
  };



module.exports = {
    createUserMiddleware,
    loginUserMiddleware,
    reValidateTokenMiddleware
}
