const ComprasRouter = require('express').Router();
const comprasController = require('./../controllers/ComprasController')

ComprasRouter.get("/",comprasController.getCompras)
ComprasRouter.post("/",comprasController.postCompras)
ComprasRouter.put("/:id",comprasController.updateCompras)
ComprasRouter.delete("/:id",comprasController.deleteCompras)

module.exports = ComprasRouter;