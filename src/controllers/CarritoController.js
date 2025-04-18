const CarritoService = require('./../services/CarritoService')

const getCarritoById = async(req,res) =>{
    let carrito = await CarritoService.getCarritoById(req.params.id)
    res.send(carrito).status(200);
}

const postCarrito = async(req,res) => {
    let carrito = await CarritoService.postCarrito(req.body)
    res.send(carrito).status(200);
}

const deleteCarrito = async (req,res) => {
    let carrito = await  CarritoService.deleteCarrito(req.params.id)
    res.send({
        status:200,
        ok: true
    })
}

module.exports={
    getCarritoById,postCarrito,deleteCarrito
}