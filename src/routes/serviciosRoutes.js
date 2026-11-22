//Importamos express en rutas
import { crearProducto, crearServicio, eliminarProductoByID, eliminarServicioByID, modificarProductoById, modificarServicioById, recibirProductoPorId, recibirProductos, recibirServicioPorId, recibirServicios } from "../controllers/serviciosControllers.js";
import express from "express"


//SERVICIOS 
const routerServicios = express.Router();
const routerServiciosById = express.Router();
const routerModificarServicioById = express.Router();
const routerEliminarServicioById = express.Router();
const routerCrearServicio = express.Router();
//PRODUCTOS 
const routerProductos = express.Router();
const routerProductosById = express.Router();
const routerModificarProductoById = express.Router();
const routerEliminarProductoById = express.Router();
const routerCrearProducto = express.Router();


//-----------------------------SERVICIOS -> Ruta <urlBase>/api/v1/servicios.
//Recibir todos los servicios.
routerServicios.get("/servicios", recibirServicios);
export default routerServicios;

//Recibir un servicio por su ID.
routerServiciosById.get("/servicios/:id", recibirServicioPorId);
export {routerServiciosById};

//Modificar un servicio por su ID.
routerModificarServicioById.put("/servicios/:id", modificarServicioById);
export {routerModificarServicioById};

//Eliminar un servicio por su ID.
routerEliminarServicioById.delete("/servicios/:id", eliminarServicioByID);
export {routerEliminarServicioById};

//Crear un servicio nuevo.
routerCrearServicio.post("/servicios", crearServicio);
export {routerCrearServicio};


//-----------------------------PRODUCTOS -> Ruta <urlBase>/api/v1/productos.
//Recibir todos los productos.
routerProductos.get("/productos", recibirProductos);
export {routerProductos};

//Recibir un producto por su ID.
routerProductosById.get("/productos/:id", recibirProductoPorId);
export {routerProductosById};

//Modificar un producto por su ID.
routerModificarProductoById.put("/productos/:id", modificarProductoById);
export {routerModificarProductoById};

//Eliminar un producto por su ID.
routerEliminarProductoById.delete("/productos/:id", eliminarProductoByID);
export {routerEliminarProductoById};

//Crear un producto nuevo.
routerCrearProducto.post("/productos", crearProducto);
export {routerCrearProducto};
