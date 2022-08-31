const express = require('express');
const app = express();

//  Importar conexion a MongoDB
const archivoBD = require('./conexion');

//  Importacion del archivo de rutas y modelo usuario
const rutaUsuario = require('./rutas/usuario');

//  Importar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

app.use('/api/usuario', rutaUsuario);

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...');
})

//  Config server basico
app.listen(5000, function(){
    console.log('El servidor Node esta corriendo correctamente');
});