const mongoose =require('mongoose');

const conexion = async ()=>{
    
    try {
        await mongoose.connect("mongodb://localhost:27018/My_blog");
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar con la base de datos");
    }
}


module.exports = {
    conexion
}

