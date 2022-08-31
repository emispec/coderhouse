const express = require("express");
const bodyParser = require("body-parser");
const routerProd = require("./routes/productos");

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
server.on("error", (err) => {
  console.log(`error: ${err}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/api", routerProd);
