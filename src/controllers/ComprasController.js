const ComprasService = require('./../services/ComprasService')


const getCompras = async(req,res)=>{
    let compras = ComprasService.getCompras();
    res.send(compras).status(200);

}

const postCompras = async(req,res)=>{
    let compras = ComprasService.postCompras(req.body);
    res.send(compras).status(200);
}

const updateCompras = async(req,res)=>{
    let compras = ComprasService.updateCompras(req.params.id,req.body);
    res.send(compras).status(200);
}

let deleteCompras = async (req,res) => {
    let compras = ComprasService.deleteCompras(req.params.id);
    res.send({
        status: 200,
        ok: true
    })
}

module.exports={
    getCompras,postCompras,deleteCompras,updateCompras
}