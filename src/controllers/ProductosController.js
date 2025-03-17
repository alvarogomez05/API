const ProductosService = require('./../services/ProductosService')

const getProducts = async (req, res) => {
    const productos = await ProductosService.getProducto();
    res.status(200).send(productos)
}

const postProducts = async (req, res) => {
    // console.log(req.body)

    const productos = await ProductosService.postProducto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,
        dto: req.body.dto,
    });
    res.status(200).send(productos)
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

module.exports = {
    getProducts,
    postProducts,
    updateProducts,
    deleteProducts
}