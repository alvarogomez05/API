const clienteService = require("../services/ClientesService")

const getClientes = async (req,res) => {
    const clientes = await clienteService.getClientes();
    res.status(200).send(clientes);
  }

module.exports={
    getClientes
}