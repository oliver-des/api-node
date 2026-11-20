//Importamos express en rutas
import { recibirServicios } from "../controllers/serviciosControllers.js";
import express from "express"

 const routerServicios=express.Router();

//RECIBIR TODOS LOS SERVICIOS
//Ruta <urlBase>/api/v1/servicios.
routerServicios.get("/servicios", recibirServicios)
export default routerServicios

