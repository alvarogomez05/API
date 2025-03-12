const clientesRouter = require("express").Router();
const productsController = require("./../controllers/ClientesController");

clientesRouter.get("/", productsController.getClientes);

module.exports = clientesRouter;
