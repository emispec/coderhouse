const fs = require("fs");

class Contenedor {
  constructor() {}

  async getAll() {
    try {
      const contenido = await fs.promises.readFile("productos.json", "utf-8");

      return JSON.parse(contenido);
    } catch (err) {
      console.log(`hubo un error ! ${err}`);
    }
  }

  async mostrarRandom() {
    try {
      const contenido = await fs.promises.readFile("productos.json", "utf-8");
      let items = JSON.parse(contenido);
      let random = items[Math.floor(Math.random() * items.length)];
      return random;
    } catch (err) {
      console.log(`hubo un error ! ${err}`);
    }
  }
}

const productos = new Contenedor("productos.json");

async function main() {
  console.log("Listado de productos: ");
  console.log(await productos.getAll());
}

module.exports = Contenedor;
