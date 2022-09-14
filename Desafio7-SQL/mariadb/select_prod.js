const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);

knex
  .from("productos")
  .select("*")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }
  })
  .catch((err) => console.log(err))
  .finally(() => knex.destroy());
