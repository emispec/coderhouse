const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);

const productos = [
  { name: "Birome", price: 560 },
  { name: "Lapiz", price: 120 },
  { name: "Hoja", price: 11 },
  { name: "Tijera", price: 450 },
];

knex("productos")
  .insert(productos)
  .then(() => console.log("Data inserted"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());

module.exports = productos;
