/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');
//const { validarJWT } = require('../middlewares/validar-jwt');
const { createUserMiddleware, 
    loginUserMiddleware, 
    reValidateTokenMiddleware } = require('./auth.middleware');
const config = require('./auth.config');
const buildInitMiddleware = require('../../util/built-init-middleware.util');
const logger = require('../../util/logger');

const initMiddleware = buildInitMiddleware(config);


const router = Router();

logger.info('[authRouter] init router');

router.post(
    '/auth/new', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        //validarCampos
    ],
    initMiddleware,
    createUserMiddleware 
);

router.post(
    '/auth/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        //validarCampos
    ],
    initMiddleware,
    loginUserMiddleware 
);


router.get('/auth/renew', 
//validarJWT,
initMiddleware,
reValidateTokenMiddleware);


module.exports = router;