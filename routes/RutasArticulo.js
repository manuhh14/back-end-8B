const express = require('express');
const router =  express.Router();

const articuloControlador =  require('../controllers/AriculoControlador');

///ruta de prueba 
router.get("/ruta-de-prueba", articuloControlador.prueba);
///http://localhost:3900/api/ruta-de-prueba

///ruta para crear un articulo
router.post("/crear-articulo", articuloControlador.crear);
///http://localhost:3900/api/crear-articulo

///ruta para listar articulos
router.get("/listar-articulos", articuloControlador.listarArticulos);
///http://localhost:3900/api/listar-articulos
module.exports= router;
