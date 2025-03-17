const { post } = require("../routes");
const Producto = require('./../database/models/ProductosModel')

const getProducto = async () => {
    const producto = await Producto.findAll();
    return producto;
  }

const postProducto = async (product) => {
  // console.log(product)

  const producto = await Producto.create(product)
  return producto;

}

const updateProducto = async (id,product) => {

  console.log(id)
  console.log(product)

  const producto = await Producto.update(product,{
    where: { id_producto: id }
  })
  return producto;
}

const deleteProducto = async (id) => {
  const producto = await Producto.destroy({
    where: { id_producto: id }
  })
  return producto;
}

module.exports = {
    getProducto,
    postProducto,
    updateProducto,
    deleteProducto
  }