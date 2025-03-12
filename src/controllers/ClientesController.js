const clienteService = require("../services/ClientesService")
const bcrypt = require("bcrypt");


const getClientes = async (req,res) => {
    const clientes = await clienteService.getClientes();
    res.status(200).send(clientes);
  }

const postClientes = async (req,res) => {
  console.log(req.body)

  const clientes = await clienteService.postClientes({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        telefono: req.body.telefono,
        direccion: req.body.direccion
      });
  res.status(200).send(clientes);
}

const updateClientes = async (req,res) => {
  const clientes = await clienteService.updateClientes(req.params.id,{
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    telefono: req.body.telefono,
    direccion: req.body.direccion
  });
  res.status(200).send(clientes);
}

const deleteClientes = async (req,res) => {
  console.log(req.params.id)
  const clientes = await clienteService.deleteClientes(req.params.id);
  res.send({status: 200,
    ok: true
   })
}


module.exports={
    getClientes,
    postClientes,
    updateClientes,
    deleteClientes
}