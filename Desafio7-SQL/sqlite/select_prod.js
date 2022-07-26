const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("producto")
  .select("*")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
