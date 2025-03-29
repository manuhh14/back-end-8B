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

/**Metodo para listar articulos* */

const listarArticulos = async (req, res)=>{
    try {
        /*Ralizar la consulta  de los articulos y limitar el numero de resultados */
        const articulos =  await Articulo.find({});

        /**Verificar si se encontraron los articulos */
        if(!articulos || articulos.length===0){
            return res.status(404).json({
                status: "error",
                mensaje: "No se encontraron artículos"
            });
        }

        /*Devover los articuos  encontrados */
        return res.status(200).json({
            status: "success",
            mensaje: "Artículos encontrados",
            articulos,
            contador: articulos.length
        });

    } catch (error) {
        /*Manejar cualquier error que ocurra*/
        console.error("Error al obtener los articulos:" + error);

        return res.status(500).json({
            status: "error",
            mensaje: "Ha ocurrido un error al obtener los artículos",
            error: error.message
        });
    }
}


module.exports = {
    prueba,
    crear,
    listarArticulos
}