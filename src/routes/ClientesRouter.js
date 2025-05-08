const clientesRouter = require("express").Router();
const clientesController = require("./../controllers/ClientesController");

clientesRouter.get("/", clientesController.getClientes);
clientesRouter.post("/", clientesController.postClientes);
clientesRouter.put("/:id", clientesController.updateClientes);
clientesRouter.put("/token/:id", clientesController.updateToken);
clientesRouter.delete("/:id", clientesController.deleteClientes);
clientesRouter.post("/login", clientesController.comprobarUsuario);
clientesRouter.post("/token/:id", clientesController.comprobarToken);
clientesRouter.post("/google/", clientesController.comprobarLogGoogle);


module.exports = clientesRouter;
