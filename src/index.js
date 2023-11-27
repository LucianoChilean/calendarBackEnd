const express = require('express');
const { middleware: contextMiddleware } = require('express-http-context');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('../database/config');
const expressSanitizer = require('express-sanitizer');
const morgan = require('morgan');
const routes = require('./routes/routes');
const logger = require('./util/logger');
const config = require('./config/globals');
const { default: helmet } = require('helmet');

//Crear el servidor de express
const app = express();

const { basepath, port  } = config;

const serverStart = async () => {

//Lectura y parseo del body
app.use(express.json());
//CONTEXT
app.use(contextMiddleware);
// CORS
app.use(cors());
// Request Sanitizer
app.use(expressSanitizer());

// Base de datos
dbConnection();

// HTTP request logger middleware
app.use(morgan('dev'));

// Helmet
app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"]
      }
    },
    frameguard: {
      action: 'deny'
    },
    hsts: {
      maxAge: 31536000
    }
  })
  );


// Directorio Público
//app.use( express.static('public') );
// rutas
app.use(basepath, routes);


// Escuchar peticiones
app.listen(  port, () => {
    logger.info(`Servidor corriendo en puerto ${ port}`);
});

}

serverStart();





