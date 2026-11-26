import express from 'express'
import { crearProducto, eliminarProductoByID, modificarProductoById, recibirProductoPorId, recibirProductos } from '../controllers/productosControllers.js';

const routerProductos = express.Router();

//GET ALL SERVICES urlBase/api/v1/productos
routerProductos.get('/', recibirProductos);

//GET A SERVICE BY ID urlBase/api/v1/productos/:id
routerProductos.get('/:id', recibirProductoPorId);

//POST A SERVICE urlBase/api/v1/productos
routerProductos.post('/', crearProducto);

//PUT A SERVICE BY ID urlBase/api/v1/productos/:id
routerProductos.put('/:id', modificarProductoById);

//DELETE A SERVICE BY ID urlBase/api/v1/productos/:id
routerProductos.delete('/:id', eliminarProductoByID);

export default routerProductos;