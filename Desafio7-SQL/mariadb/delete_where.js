const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);

knex
  .from("productos")
  .where("price", ">", "350")
  .del()
  .then(() => console.log("Productos eliminados"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
