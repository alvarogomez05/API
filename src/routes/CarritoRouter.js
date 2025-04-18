const CarritoRouter = require('express').Router();
const CarritoController = require('./../controllers/CarritoController');

CarritoRouter.get("/:id", CarritoController.getCarritoById)
CarritoRouter.post("/", CarritoController.postCarrito)
CarritoRouter.delete("/:id", CarritoController.deleteCarrito)

module.exports = CarritoRouter;