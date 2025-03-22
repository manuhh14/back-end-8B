const conexion = require('./conexion');
const express= require('express');
const cors= require('cors');

///iniciar la app
console.log("App arrancada.......");

///conectar con la base de datos
conexion.conexion();

//Creacion del servidor 
const app = express();
const puerto= 3900;
///configurar cors
app.use(cors());

///convertir el  body a objeto JSON
app.use(express.json());


////rutas
const rutas_articulo = require('./routes/RutasArticulo');
///cargar las rutas 
app.use("/api", rutas_articulo);


//crear servidor y escuchar el puerto
app.listen(puerto, ()=>{
    console.log("Servidor corriendo en el puerto "+ puerto)
});



