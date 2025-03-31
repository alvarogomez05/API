const { post } = require("../routes");
const Compra = require('./../database/models/ComprasModel')

const getCompras = async()=>{
    let compras = await Compra.findAll();
    return compras;
}

const postCompras = async(c)=>{
    let compras = await Compra.create(c)
    return compras;
}

const updateCompras = async(id,c)=>{
    let compras = await Compra.update(c,{
        where: {
            id_compra: id
        }
    });

    return compras;
}

let deleteCompras = async (id) => {
    let compras = await Compra.destroy({
        where:{ id_compra: id}
    });
    return compras;
}

module.exports={
    getCompras,postCompras,deleteCompras,updateCompras
}