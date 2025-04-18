const {post} = require('./../routes')
const Carrito = require('./../database/models/CarritoModel')

const getCarritoById = async(id) =>{
    let carrito = Carrito.findAll({
        where:{id_cliente:id}
    })
    return carrito;
}

const postCarrito = async(c) => {
    // console.log(c)
    let carrito = Carrito.create(c)
    return carrito;
}

const deleteCarrito = async (id) => {
    let carrito = Carrito.destroy({
        where: {id:id}
    })
}

module.exports={
    getCarritoById,postCarrito,deleteCarrito
}