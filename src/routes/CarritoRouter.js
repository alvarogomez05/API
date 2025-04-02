const CarritoRouter = require('express').Router();
const CarritoController = require('./../controllers/CarritoController');

CarritoRouter.get("/", CarritoController.getCarritoById)
CarritoRouter.post("/:id", CarritoController.postCarrito)
CarritoRouter.delete("/:id", CarritoController.deleteCarrito)

module.exports = CarritoRouter;