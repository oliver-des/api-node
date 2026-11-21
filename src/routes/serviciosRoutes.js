//Importamos express en rutas
import { eliminarServicioByID, modificarServicioById, recibirServicioPorId, recibirServicios } from "../controllers/serviciosControllers.js";
import express from "express"

const routerServicios = express.Router();
const routerServiciosById = express.Router();
const routerModificarServicioById = express.Router();
const routerEliminarServicioById = express.Router();

//RECIBIR TODOS LOS SERVICIOS
//Ruta <urlBase>/api/v1/servicios.
routerServicios.get("/servicios", recibirServicios)
export default routerServicios;

//RECIBIR UN SERVICIO POR SU ID 
routerServiciosById.get("/servicios/:id", recibirServicioPorId)
export {routerServiciosById};

//MODIFICAR UN SERVICIO POR SU ID.
routerModificarServicioById.put("/servicios/:id", modificarServicioById)
export {routerModificarServicioById};

//ELIMINAR UN SERVICIO POR SU ID.
routerEliminarServicioById.delete("/servicios/:id", eliminarServicioByID)
export {routerEliminarServicioById}