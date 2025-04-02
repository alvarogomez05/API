const ComprasRouter = require('express').Router();
const comprasController = require('./../controllers/ComprasController')

ComprasRouter.get("/",comprasController.getCompras)
ComprasRouter.post("/",comprasController.postCompras)
ComprasRouter.put("/",comprasController.updateCompras)
ComprasRouter.delete("/",comprasController.deleteCompras)

module.exports = ComprasRouter;