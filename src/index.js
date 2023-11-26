const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('../database/config');
const expressSanitizer = require('express-sanitizer');
const morgan = require('morgan');
const routes = require('./routes/routes');
const logger = require('./util/logger');
const config = require('./config/globals');
const { default: helmet } = require('helmet');
const httpContext = require('express-http-context');


// Crear el servidor de express
const app = express();

const { configBase } = config();
const { basepath, port  } = configBase;

const serverStart = async () => {

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

// CORS
app.use(cors());

// Request Sanitizer
app.use(expressSanitizer());

// Directorio Público
//app.use( express.static('public') );

//CONTEXT
app.use(httpContext.middleware);

// Lectura y parseo del body
app.use(express.json());

// rutas
app.use(basepath, routes);



// Escuchar peticiones
app.listen(  port, () => {
    logger.info(`Servidor corriendo en puerto ${ port}`);
});

}

serverStart();





