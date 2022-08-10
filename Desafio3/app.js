const express = require("express");
const Contenedor = require("./main");
const fs = require("fs");
const app = express();

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

const productos = new Contenedor();

app.get("/productos", async (req, res) => {
  const lista = await productos.getAll();
  res.send(lista);
});

app.get("/productoRandom", async (req, res) => {
  const random = await productos.mostrarRandom();
  res.send(random);
});

app.use("*", (req, res, next) => {
  res.status(404).send("<h1>Page not found.</h1>");
});
