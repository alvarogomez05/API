const {post} = require('./../routes')
const Carrito = require('./../database/models/CarritoModel')

const getCarritoById = async(id) =>{
    let carrito = Carrito.findAll({
        where:{id:id}
    })
    return carrito;
}

const postCarrito = async(c,id) => {
    let carrito = Carrito.create(c,{
        where:{id:id}
    })
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