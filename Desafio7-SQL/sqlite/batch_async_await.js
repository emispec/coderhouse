const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);
const producto = require("./insert_prod.js");

(async () => {
  try {
    console.log("Los productos fueron borrados.");
    await knex("producto").del();

    console.log("Producto agregado");
    await knex("producto").insert(producto);

    console.log("Lista de productos");
    let rows = await knex.from("producto").select("*");
    for (row of rows)
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);

    console.log("Producto agregado");
    await knex("producto").insert({ name: "Goma", price: 33 });

    console.log("Lista de productos actualizada.");
    rows = await knex.from("producto").select("*");
    for (row of rows)
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
  } catch (err) {
    console.log(err);
  } finally {
    knex.destroy();
  }
})();
