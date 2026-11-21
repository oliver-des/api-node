import express from "express"
import 'dotenv/config'
import routerServicios, { routerEliminarServicioById, routerModificarServicioById, routerServiciosById } from "./routes/serviciosRoutes.js";



const app = express();

const port = process.env.PORT || 3000

//Mostramos en consola.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


//middleware recibir todos los servicios.
app.use("/api/v1", routerServicios)

//middleware recibir un servicio por su id.
app.use("/api/v1", routerServiciosById)

//middleware modificar un servicio por su id.
app.use("/api/v1", routerModificarServicioById)

//middleware eliminar un servicio por su id.
app.use("/api/v1", routerEliminarServicioById)


//RUTAS
//CREAR UN SERVICIO. TODO:
app.post('/api/v1/servicios', (req,res) => {
  res.status(201).json({
    ok:true,
    msg:'servicio creado'
  });
})






// //RUTAS PRODUCTOS
// app.get("/api/productos", (req, res) => {
//   res.json({});
// });









