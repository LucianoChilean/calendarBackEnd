const { response } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../src/config/globals');

const { jwt } = config();

const validarJWT = ( req, res = response, next ) => {

    // x-token headers
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            jwt
        );

        req.uid = uid;
        req.name = name;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }



    next();
}


module.exports = {
    validarJWT
}
