const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("producto")
  .where("price", "120")
  .update({ price: 800 })
  .then(() => console.log("Producto modificado"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
