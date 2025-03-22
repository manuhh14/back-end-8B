const express = require('express');
const router =  express.Router();

const articuloControlador =  require('../controllers/AriculoControlador');

///ruta de prueba 
router.get("/ruta-de-prueba", articuloControlador.prueba);

module.exports= router;
