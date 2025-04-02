const empleadosRouter = require("express").Router();
const empleadosController = require("./../controllers/EmpleadosController");

empleadosRouter.get("/", empleadosController.getEmpleado);
empleadosRouter.post("/", empleadosController.postEmpleado);
empleadosRouter.put("/:id", empleadosController.updateEmpleado);
empleadosRouter.delete("/:id", empleadosController.deleteEmpleado);

module.exports = empleadosRouter;