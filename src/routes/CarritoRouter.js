const CarritoRouter = require('express').Router();
const CarritoController = require('./../controllers/CarritoController');

CarritoRouter.get("/:id", CarritoController.getCarritoById)
CarritoRouter.post("/", CarritoController.postCarrito)
CarritoRouter.delete("/:id_cliente/:id_producto", CarritoController.deleteCarrito)

module.exports = CarritoRouter;