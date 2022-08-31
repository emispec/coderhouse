const router = require("express").Router();
const Producto = require("../Producto");

router.get("/productos", (req, res) => {
  res.send(Producto.productos);
});

router.get("/productos/:id", (req, res) => {
  let prod = Producto.productos.find(
    (prod) => prod.id === Number(req.params.id)
  );
  if (prod) {
    res.send(prod);
  } else {
    res.status(404).send({ error: "No se encontro el producto solicitado." });
  }
});

router.post("/productos", (req, res) => {
  let { title, price, thumbnail } = req.body;
  const producto = { title, price, thumbnail };
  producto.id = Producto.productos.length + 1;
  Producto.productos.push(producto);
  res.send(Producto.productos);
});

router.put("/productos/:id", (req, res) => {
  let { title, price, thumbnail } = req.body;
  let index = Producto.productos.findIndex(
    (prod) => prod.id === Number(req.params.id)
  );
  if (index >= 0) {
    Producto.productos[index] = { title, price, thumbnail };
    Producto.productos[index].id = Number(req.params.id);
    res.send(Producto.productos[index]);
  } else {
    res.status(404).send({ error: "No se encontro el producto solicitado." });
  }
});

router.delete("/productos/:id", (req, res) => {
  let index = Producto.productos.findIndex(
    (prod) => prod.id === Number(req.params.id)
  );
  if (index >= 0) {
    Producto.productos.splice(index, 1);
    res.send({ message: "Producto eliminado" });
  } else {
    res.status(404).send({ error: "No se encontro el producto solicitado." });
  }
});

//
module.exports = router;
