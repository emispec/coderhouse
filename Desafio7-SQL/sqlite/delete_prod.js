const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("producto")
  .del()
  .then(() => console.log("Todos los productos fueron borrados"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
