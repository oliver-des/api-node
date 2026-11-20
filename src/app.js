import express from "express"
import 'dotenv/config'
import routerServicios from "./routes/serviciosRoutes.js";


const app = express();

const port = process.env.PORT || 3000


//middleware
app.use('/api/v1', routerServicios)






// //RUTAS PRODUCTOS
// app.get("/api/productos", (req, res) => {
//   res.json({});
// });





app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});