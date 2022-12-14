const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaUsuario = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', schemaUsuario);
module.exports = router;

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });
    nuevousuario.save(function(err){
        if (!err) {
            res.send('Usuario agregado correctamente');
        } else {
            res.send(err);
        }
    });
})

//  Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function(err, docs){
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    })
})

router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(err, docs){
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    })
})

router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if (!err) {
            res.send('Usuario actualizado correctamente');
        } else {
            res.send(err);
        }
    })
})

router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if (!err) {
            res.send('Usuario borrado correctamente');
        } else {
            res.send(err);
        }
    })
})

//  RUTA DE PRUEBA
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta de ejemplo');
// });