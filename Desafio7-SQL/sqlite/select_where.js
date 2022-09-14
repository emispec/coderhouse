const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("producto")
  .select("name", "price")
  .where("price", ">", "200")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["name"]} ${row["price"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
