const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);
const productos = require("./insert_prod");

(async () => {
  try {
    console.log("Productos borrados");
    await knex("productos").del();

    console.log("Productos agregados");
    await knex("productos").insert(productos);

    console.log("Lista de productos.");
    let rows = await knex.from("productos").select("*");
    for (row of rows)
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);

    console.log("Producto agregado");
    await knex("producto").insert({ name: "Goma", price: 33 });

    console.log("Lista de productos actualizada");
    rows = await knex.from("productos").select("*");
    for (row of rows)
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
  } catch (err) {
    console.log(err);
  } finally {
    knex.destroy();
  }
})();
