//-----------------------------CONTROLLERS SERVICIOS.
//Controlador para recibir servicios.
export const recibirServicios = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Recibiendo servicios......'
  });
};
//Controlador para recibir un servicio por su ID.
export const recibirServicioPorId = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Recibiendo un servicio por su ID......'
  });
};
//Controlador para modificar un servicio por su ID.
export const modificarServicioById = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'Modificando o actualizando un servicio por su ID......'
  });
};
//Controlador para eliminar un servicio por su ID.
export const eliminarServicioByID = (req, res) => {
  res.status(200/*204*/).json({
    ok: true,
    msg: 'Servicio eliminado......'
  });
};
//Controlador para crear un servicio nuevo.
export const crearServicio = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'servicio creado.....'
  });
};


//-----------------------------CONTROLLERS PRODUCTOS.
//Controlador para recibir servicios.
export const recibirProductos = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Recibiendo productos......'
  });
};
//Controlador para recibir un producto por su ID.
export const recibirProductoPorId = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Recibiendo un Producto por su ID......'
  });
};
//Controlador para modificar un producto por su ID.
export const modificarProductoById = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'Modificando o actualizando un Producto por su ID......'
  });
};
//Controlador para eliminar un producto por su ID.
export const eliminarProductoByID = (req, res) => {
  res.status(200/*204*/).json({
    ok: true,
    msg: 'Producto eliminado......'
  });
};
//Controlador para crear un producto nuevo.
export const crearProducto = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'Producto creado.....'
  });
};