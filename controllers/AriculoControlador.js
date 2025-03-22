const validator=  require('validator');
const Articulo= require('../models/Articulo');


const prueba= (req, res)=>{
    return res.status(200).json({
        mensaje: "Soy una ruta deprueba"
    })
}

module.exports = {
    prueba
}