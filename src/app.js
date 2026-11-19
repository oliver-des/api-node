import express from "express"
import 'dotenv/config'
const app = express();

const port = process.env.PORT || 3000


const servicios = [
  {
    id: 1,
    nombre: "gestión",
    precio: 1000
  },
  {
    id: 2,
    nombre: "asesoramiento",
    precio: 250
  }
];

const productos = [
  { id: 1, nombre: "Ordenador", precio: 870},
  { id: 2, nombre: "Móvil", precio: 720 }
];





app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});