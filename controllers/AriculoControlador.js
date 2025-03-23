const validator=  require('validator');
const Articulo= require('../models/Articulo');


const prueba= (req, res)=>{
    return res.status(200).json({
        mensaje: "Soy una ruta deprueba"
    })
}

/*funcion para crear articulos  */
const crear = async (req, res)=>{
    ///recoger pararametros por  POST
    let parametros =  req.body;

    ///verificar que los parametros existan 
    if(!parametros || !parametros.titulo || !parametros.contenido){
        return res.status(400).json({
            status: "error",
            mensaje: "Falatan datos necesarios"
        })
    }

    ///validar los datos
    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo);
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        if(!validar_titulo || !validar_contenido){
            throw new Error("La validación de los datos ha fallado");
        }
    } catch (error) {
        return res.status(400).json({
            status: "Error",
            mensaje: "Datos invalidos, no se ha validado la información"
        });
    }

    try {
        /// Crear datos
        const articulo =  new Articulo(parametros);

        ///guardar e articulo en la base de datos 
        const articuloGuardado = await articulo.save();

        ///devolver resultados
        return res.status(200).json({
            status: "success",
            mensaje: "Articulo Guardado correctamente",
            articulo: articuloGuardado
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Ha ocurrido un error al guardar el articulo",
            error: error.message
        });
    }
}



module.exports = {
    prueba,
    crear
}