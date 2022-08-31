const fs = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile(this.ruta, "utf-8");

      return JSON.parse(contenido);
    } catch (err) {
      console.log(`hubo un error ! ${err}`);
    }
  }

  async save(obj) {
    try {
      const objetos = await this.getAll();

      let nuevoId;

      if (objetos.length == 0) {
        nuevoId = 1;
      } else {
        nuevoId = objetos[objetos.length - 1].id + 1;
      }

      const nuevoObjeto = { id: nuevoId, ...obj };
      objetos.push(nuevoObjeto);

      await fs.promises.writeFile(this.ruta, JSON.stringify(objetos, null, 2));

      return nuevoId;
    } catch (error) {
      console.log("Error al guardar.");
    }
  }

  async getById(id) {
    try {
      const objetos = await this.getAll();
      const indexObj = objetos.filter((i) => i.id == id);

      if (indexObj == -1) {
        return "No se encontro el elemento.";
      } else {
        return indexObj;
      }
    } catch (error) {
      return "imposible mostrar.";
    }
  }

  async deleteById(id) {
    try {
      const objetos = await this.getAll();
      const indexObj = objetos.findIndex((i) => i.id == id);

      if (indexObj == -1) {
        return "No se encontro el elemento.";
      } else {
        objetos.splice(indexObj, 1);
        fs.promises.writeFile(this.ruta, JSON.stringify(objetos, null, 2));
      }
    } catch (error) {
      return "imposible eliminar.";
    }
  }

  async deleteAll() {
    try {
      const objetos = await this.getAll();
      let largo = objetos.length;
      objetos.splice(0, largo);
      fs.promises.writeFile(this.ruta, JSON.stringify(objetos, null, 2));
    } catch (error) {
      return "imposible eliminar todos los objetos.";
    }
  }
}

// Creo el objeto a partir de la clase
const productos = new Contenedor("DB/productos-data.json");

//Funcion que invoca los metodos
async function main() {
  //Agrego una producto 1
  console.log("agregando producto...");
  console.log(
    await productos.save({
      title: "Escuadra",
      price: 123.45,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      id: 1,
    })
  );
  //Agrego producto 2
  console.log("agregando producto...");
  console.log(
    await productos.save({
      title: "Calculadora",
      price: 234.56,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      id: 2,
    })
  );
  //Agrego producto 3
  console.log("agregando producto...");
  console.log(
    await productos.save({
      title: "Globo Terráqueo",
      price: 345.67,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      id: 3,
    })
  );
  //invoco metodo para listar
  console.log("Listado de productos: ");
  console.log(await productos.getAll());
  //buscar por ID (ejemplo ID 1)
  console.log("El producto solicitado: ");
  console.log(await productos.getById(1));
  //eliminar por ID (ejemplo ID 2)
  console.log("Eliminando el producto solicitado...");
  await productos.deleteById(2);
  //mostrando de nuevo la lista de productos actualizada para comparar
  console.log("Lista de productos actualizada");
  console.log(await productos.getAll());
  //borrar todos los objetos
  console.log("Eliminando todos los productos...");
  await productos.deleteAll();
  console.log(await productos.getAll());
}

main();
