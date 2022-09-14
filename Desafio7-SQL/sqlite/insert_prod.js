const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

const producto = [
  { name: "Lapicera", price: 521 },
  { name: "Lapiz", price: 120 },
  { name: "Tijera", price: 300 },
  { name: "Hoja", price: 11 },
];

knex("producto")
  .insert(producto)
  .then(() => console.log("Agregado"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());

module.exports = producto;
