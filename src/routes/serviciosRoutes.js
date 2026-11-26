import express from 'express';
import {
	crearServicio,
	eliminarServicioByID,
	modificarServicioById,
	recibirServicioPorId,
	recibirServicios,
} from '../controllers/serviciosControllers.js';

const routerServicios = express.Router();

//GET ALL SERVICES urlBase/api/v1/servicios
routerServicios.get('/', recibirServicios);

//GET A SERVICE BY ID urlBase/api/v1/servicios/:id
routerServicios.get('/:id', recibirServicioPorId);

//POST A SERVICE urlBase/api/v1/servicios
routerServicios.post('/', crearServicio);

//PUT A SERVICE BY ID urlBase/api/v1/servicios/:id
routerServicios.put('/:id', modificarServicioById);

//DELETE A SERVICE BY ID urlBase/api/v1/servicios/:id
routerServicios.delete('/:id', eliminarServicioByID);

export default routerServicios;