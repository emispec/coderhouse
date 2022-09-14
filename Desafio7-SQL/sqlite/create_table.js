const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex.schema
  .createTable("producto", (table) => {
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
