const {post} = require('./../routes')
const Carrito = require('./../database/models/CarritoModel')

const getCarritoById = async(id) =>{
    let carrito = await Carrito.findAll({
        where:{id_cliente:id}
    })
    return carrito;
}

const postCarrito = async(c) => {


    let existe = await Carrito.findOne({
        where:{id_cliente:c.id_cliente,id_producto:c.id_producto}
    })

    if(existe){
        console.log(existe)
        // actualizar la cantidad a mas uno
        let cant = existe.cantidad + 1;

        let newCarrito = {
            id: existe.id,
            id_cliente: existe.id_cliente,
            id_producto: existe.id_producto,
            cantidad: cant 
        }

        console.log(newCarrito)

        let carrito = await Carrito.update(newCarrito,{
            where: {id: existe.id}
        })

        return carrito;
    }

    // si no exite lo creo de 0
    let carrito = Carrito.create(c)
    return carrito;
}

const deleteCarrito = async (id_cliente,id_producto) => {
    let carrito = await Carrito.destroy({
        where: {id_cliente:id_cliente,
            id_producto:id_producto
        }
    })
}

module.exports={
    getCarritoById,postCarrito,deleteCarrito
}