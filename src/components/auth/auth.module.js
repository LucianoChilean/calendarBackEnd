// modulo en donde se encuentra toda la logica del componente
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../../models/Usuario');
const { generateJWT } = require('../../util/generateJwt');
const { getBody } = require('../../util/context-helper.util');
const logger = require('../../util/logger');

//* Modulo en donde esta toda la lógica de cada endpoint
 
const createUserModule = async() => {

    logger.info('[createUserModule] Init Module.');
    const body = getBody();
    const { email, password } = body;
   
    try {
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return {
                ok: false,
                msg: 'El usuario ya existe'
            };
        }

        usuario = new Usuario( body );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );


        await usuario.save();

        // Generar JWT
        const token = await generateJWT( usuario.id, usuario.name );

    
        const response = {
            payload: {
                uid: usuario.id,
                name: usuario.name,
                token
            }
        };

        return response;
        
    } catch (error) {
        logger.error('[createUserModule] Error response.',error);
        console.log(error)
        throw new Error(error);
    }
}


const loginUserModule = async() => {

    logger.info('[loginUserModule] Init Module.');
    const body = getBody();
    const { email, password } = body;

    try {
        
        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {
            return {
                ok: false,
                msg: 'El usuario no existe con ese email'
            };
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return {
                ok: false,
                msg: 'Password incorrecto'
            };
        }

        // Generar JWT
        const token = await generateJWT( usuario.id, usuario.name );

        const response = {
            payload:{
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
            }
        };

        return response;

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}


const reValidateTokenModule = async (req, res = response ) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generateJWT( uid, name );

    const response = {
        payload:{
            ok: true,
            uid,
            name,
            token
        }
       
    };

    return response;
}




module.exports = {
    createUserModule,
    loginUserModule,
    reValidateTokenModule
}