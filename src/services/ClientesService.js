const Cliente = require("./../database/models/ClientesModel")

const getClientes = async () => {
    const clientes = await Cliente.findAll();
    return clientes;
  }
  module.exports = {
    getClientes
  }