const ProductosService = require('./../services/ProductosService')

const multer = require("multer");
// Configuración de almacenamiento en memoria (para guardar en la BD)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getProducts = async (req, res) => {
    const productos = await ProductosService.getProducto();
    res.status(200).send(productos)
}

const postProducts = async (req, res) => {
    try {
        if (!req.file) {
          return res.status(400).send({ error: "ERROR al subir un producto : No se subio la imagen" });
        }
        const productos = await ProductosService.postProducto({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            categoria: req.body.categoria,
            imagen: req.file.buffer, // Aquí guardamos el binario de la imagen
        });
        res.status(201).send(productos);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

const updateProducts = async (req, res) => {
    // console.log(req.body)
    // console.log(req.params)

    const productos = await ProductosService.updateProducto(req.params.id,{
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,
        dto: req.body.dto,
    });
    res.status(200).send(productos)
}

const deleteProducts = async (req, res) => {
    console.log(req.params.id)
    const productos = await ProductosService.deleteProducto(req.params.id);
    res.send({
        status: 200,
        ok: true
    })
}

const getProductsbyId = async (req,res) => {
    const productos = await ProductosService.getProductsbyId(req.params.id);
    res.status(200).send(productos)
}

module.exports = {
    getProducts,
    postProducts,
    updateProducts,
    deleteProducts,
    getProductsbyId
}