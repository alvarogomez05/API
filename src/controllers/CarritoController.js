const CarritoService = require('./../services/CarritoService')

const getCarritoById = async(req,res) =>{
    let carrito = CarritoService.getCarritoById(req.params.id)
    res.send(carrito).status(200);
}

const postCarrito = async(req,res) => {
    let carrito = CarritoService.postCarrito(req.params.is,req.body)
    res.send(carrito).status(200);
}

const deleteCarrito = async (req,res) => {
    let carrito = CarritoService.deleteCarrito(req.params.id)
    res.send({
        status:200,
        ok: true
    })
}

module.exports={
    getCarritoById,postCarrito,deleteCarrito
}