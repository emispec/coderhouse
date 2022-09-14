const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("producto")
  .where("price", ">", "200")
  .del()
  .then(() => console.log("Productos borrados"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
