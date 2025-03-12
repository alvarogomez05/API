const { post } = require("../routes");
const Cliente = require("./../database/models/ClientesModel")

const getClientes = async () => {
    const clientes = await Cliente.findAll();
    return clientes;
  }

const postClientes = async (user) => {
  const clientes = await Cliente.create(user)
  return clientes;

}

const updateClientes = async (id,user) => {
  const clientes = await Cliente.update(user,{
    where: { id_cliente: id }
  })
  return clientes;
}

const deleteClientes = async (id) => {
  const clientes = await Cliente.destroy({
    where: { id_cliente: id }
  })
  return clientes;
}

module.exports = {
    getClientes,
    postClientes,
    updateClientes,
    deleteClientes
  }