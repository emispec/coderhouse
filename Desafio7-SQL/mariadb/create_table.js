const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);

knex.schema
  .createTable("productos", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("price");
  })
  .then(() => console.log("Tabla creada"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
