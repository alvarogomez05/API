const clientesRouter = require("express").Router();
const clientesController = require("./../controllers/ClientesController");

clientesRouter.get("/", clientesController.getClientes);
clientesRouter.post("/", clientesController.postClientes);
clientesRouter.put("/:id", clientesController.updateClientes);
clientesRouter.delete("/:id", clientesController.deleteClientes);

module.exports = clientesRouter;
