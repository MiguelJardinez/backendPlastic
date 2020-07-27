const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000; 

//Configuración de body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas de las la API para solicitud de datos
app.use( require('./src/routes/categoria.js') );

// Conexion a la base de datos
require('./src/db/db');

app.listen(port, () => {
  console.log('servidor listo en puerto', port); 
})