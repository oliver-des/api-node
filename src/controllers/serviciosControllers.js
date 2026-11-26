//-----------------------------CONTROLLERS SERVICIOS.
//Controlador para recibir servicios.
export const recibirServicios = async (req, res) => {
  try {

    res.status(200).json({
      ok: true,
      msg: 'Recibiendo servicios......'
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Error de servidor.'
    });
  }

};


//Controlador para recibir un servicio por su ID.
export const recibirServicioPorId = async (req, res) => {
  try {
    //RECOGER EL ID
    // const id  = req.params.id;
    // const servicio = await Servicio.findById(id);

    res.status(200).json({
      ok: true,
      msg: 'Recibiendo un servicio por su ID......'
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor.'
    });
  }

};


//Controlador para modificar un servicio por su ID.
export const modificarServicioById = async (req, res) => {
  try {


    res.status(201).json({
      ok: true,
     msg: 'Modificando o actualizando un servicio por su ID......'
  });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor.'
    });
  }

};


//Controlador para eliminar un servicio por su ID.
export const eliminarServicioByID = async (req, res) => {
  try {


    res.status(200/*204*/).json({
      ok: true,
      msg: 'Servicio eliminado......'
  });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor.'
    })
  }
 
};


//Controlador para crear un servicio nuevo.
export const crearServicio = async (req, res) => {
  try {


    res.status(201).json({
      ok: true,
      msg: 'servicio creado.....'
  });
  } catch (error) {
     res.status(500).json({
        ok: false,
        msg: 'Error de servidor.'
    })
  }
  
};

