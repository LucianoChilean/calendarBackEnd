/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');
const { createUserMiddleware, 
    loginUserMiddleware, 
    reValidateTokenMiddleware } = require('./auth.middleware');
const logger = require('../../util/logger');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

logger.info('[authRouter] init router');

router.post(
    '/auth/new', 
    //[ // middlewares
    //    check('name', 'El nombre es obligatorio').not().isEmpty(),
    //    check('email', 'El email es obligatorio').isEmail(),
    //    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    //    validarCampos
    //],
    createUserMiddleware 
);

router.post(
    '/auth/',
    //[
    //    check('email', 'El email es obligatorio').isEmail(),
    //    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    //    validarCampos
    //],
    loginUserMiddleware 
);


router.get('/auth/renew', 
//validarJWT,
reValidateTokenMiddleware);


module.exports = router;