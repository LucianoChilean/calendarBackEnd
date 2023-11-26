const mongoose = require('mongoose');
const logger = require('../src/util/logger');
const config = require('../src/config/globals');

const { configBD } = config();

const dbConnection = async() => {

    try {
        
        await mongoose.connect( configBD.fullUrl , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        logger.info('conexion a la base de datos mongoDB exitosa')


    } catch (error) {
        logger.error(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}