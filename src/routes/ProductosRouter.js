const ProductosRouter = require("express").Router();
const ProductosController = require("./../controllers/ProductosController");

const multer = require('multer')
// Configurar Multer para guardar en memoria antes de enviarlo a la BD
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


ProductosRouter.post("/", upload.single("imagen"), ProductosController.postProducts);

ProductosRouter.get("/", ProductosController.getProducts);
ProductosRouter.put("/:id", ProductosController.updateProducts);
ProductosRouter.delete("/:id", ProductosController.deleteProducts);
ProductosRouter.get("/:id", ProductosController.getProductsbyId)

module.exports = ProductosRouter;