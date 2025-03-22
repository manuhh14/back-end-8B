const {Schema, model} = require('mongoose');

const Articuloschema= Schema({
    titulo:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    imagen:{
        type:String,
        default: "defaul.png"
    }
})

module.exports= model("Articulo", Articuloschema, "articulos");