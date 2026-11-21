//Controlador para recibir servicios
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
export const modificarServicioById =  (req,res) => {
  res.status(201).json({
    ok: true,
    msg: 'Modificando o actualizando un servicio por su ID......'
  });
}

//Controlador para eliminar un servicio por su ID.
export const eliminarServicioByID = (req, res)=>{
  res.status(200/*204*/).json({
    ok:true,
    msg: 'Servicio eliminado......'
  });
}
