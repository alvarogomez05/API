const express = require("express");
const router = express.Router();

const ProductosRouter = require("./ProductosRouter.js");
const ClientesRouter = require("./ClientesRouter.js")
const EmpleadosRouter = require("./EmpleadosRouter.js")
const ComprasRouter = require("./ComprasRouter.js")
const FavoritosRouter = require("./FavoritosRouter.js")
const ImagenRouter = require("./ImagenRouter.js")
const CarritoRouter = require("./CarritoRouter.js")


router.use("/productos", ProductosRouter);
router.use("/clientes", ClientesRouter)
// router.use("/empleados", EmpleadosRouter)
// router.use("/compras", ComprasRouter)
// router.use("/favoritos", FavoritosRouter)
// router.use("/imagenes", ImagenRouter)
// router.use("/carrito", CarritoRouter)

module.exports = router;
