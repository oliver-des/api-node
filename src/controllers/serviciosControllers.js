//Controlador para recibir servicios
export const recibirServicios=(req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Recibiendo servicios......'
  });
};
