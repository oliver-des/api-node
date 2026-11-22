import express from "express"
import 'dotenv/config'
import routerServicios, { routerCrearProducto, routerCrearServicio, routerEliminarProductoById, routerEliminarServicioById, routerModificarProductoById, routerModificarServicioById, routerProductos, routerProductosById, routerServiciosById } from "./routes/serviciosRoutes.js";

const app = express();

const port = process.env.PORT || 3000

//Mostramos en consola.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


//-----------------------------MIDDLEWARE SERVICIOS-----------------------------
//middleware recibir todos los servicios.
app.use("/api/v1", routerServicios);
//middleware recibir un servicio por su id.
app.use("/api/v1", routerServiciosById);
//middleware modificar un servicio por su id.
app.use("/api/v1", routerModificarServicioById);
//middleware eliminar un servicio por su id.
app.use("/api/v1", routerEliminarServicioById);
//middleware crear un servicio nuevo.
app.use("/api/v1", routerCrearServicio);

//-----------------------------MIDDLEWAREPRODUCTOS-----------------------------
//middleware recibir todos los productos.
app.use("/api/v1", routerProductos);
//middleware recibir un producto por su id.
app.use("/api/v1", routerProductosById);
//middleware modificar un producto por su id.
app.use("/api/v1", routerModificarProductoById);
//middleware eliminar un producto por su id.
app.use("/api/v1", routerEliminarProductoById);
//middleware crear un producto nuevo.
app.use("/api/v1", routerCrearProducto);