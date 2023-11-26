// modulo en donde se encuentra toda la logica del componente
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../../models/Usuario');
const { generateJWT } = require('../../util/generateJwt');
const httpContext = require('express-http-context')
//* Modulo en donde esta toda la lógica de cada endpoint
 
const createUserModule = async() => {

    const body = httpContext.get('BODY');
    console.log(body)

  console.log("MODULO");
    return true;
    try {
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario( req.body );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );


        await usuario.save();

        // Generar JWT
        const token = await generateJWT( usuario.id, usuario.name );

        console.log(token)
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}


const loginUserModule = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generateJWT( usuario.id, usuario.name );

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })


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

    res.json({
        ok: true,
        uid,
        name,
        token
    })
}




module.exports = {
    createUserModule,
    loginUserModule,
    reValidateTokenModule
}