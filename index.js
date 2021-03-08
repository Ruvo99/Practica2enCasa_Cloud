//Importar las librerias
const express = require('express');
require('dotenv').config();

//Importar el router
const router = require('./routes/routes.js');

//Crear app
const app = express();

//Definir el puerto 
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';


//Usar JSON
app.use(express.json());

//Idicar que se usara el router
app.use(router);

//Iniciar el server
app.listen(port, host, () => {
    console.log(`Server listening on port ${port} and host ${host}`);
});
