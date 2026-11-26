import express from "express"
import helmet from "helmet"
import 'dotenv/config'

import routerServicios  from './routes/serviciosRoutes.js'
import routerProductos from "./routes/productosRoutes.js"

const app = express()
// Añadimos capa de seguridad extra, con las opciones predefinidas por helmet
app.use(helmet())

const port = process.env.PORT || 3000


// Middlewares integrados en Express (equivalentes a body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//-----------------------------MIDDLEWARE-----------------------------
//RUTAS SERVICIOS.
app.use("/api/v1/servicios", routerServicios);

//RUTAS PRODUCTOS.
app.use("/api/v1/productos", routerProductos);



//Poner al servidor a la escucha del puerto.
app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
