
//-----------------------------CONTROLLERS PRODUCTOS.
//Controlador para recibir servicios.
export const recibirProductos = async (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      msg: 'Recibiendo productos......'
  });
  } catch (error) {
    res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }
 
};


//Controlador para recibir un producto por su ID.
export const recibirProductoPorId = async (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      msg: 'Recibiendo un Producto por su ID......'
  });
  } catch (error) {
     res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }

};


//Controlador para modificar un producto por su ID.
export const modificarProductoById = async (req, res) => {
  try {
    res.status(201).json({
      ok: true,
      msg: 'Modificando o actualizando un Producto por su ID......'
  });
  } catch (error) {
    res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }
  
};


//Controlador para eliminar un producto por su ID.
export const eliminarProductoByID = async (req, res) => {
  try {
    res.status(200/*204*/).json({
      ok: true,
      msg: 'Producto eliminado......'
  });
  } catch (error) {
    res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }
  
};


//Controlador para crear un producto nuevo.
export const crearProducto = async (req, res) => {
  try {
    res.status(201).json({
      ok: true,
      msg: 'Producto creado.....'
  });
  } catch (error) {
    res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }
  
};