const ProductosRouter = require("express").Router();
const ProductosController = require("./../controllers/ProductosController");

ProductosRouter.get("/", ProductosController.getProducts);
ProductosRouter.post("/", ProductosController.postProducts);
ProductosRouter.put("/:id", ProductosController.updateProducts);
ProductosRouter.delete("/:id", ProductosController.deleteProducts);

module.exports = ProductosRouter;