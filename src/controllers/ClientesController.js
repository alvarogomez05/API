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
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        telefono: req.body.telefono,
        direccion: req.body.direccion
      });
  res.status(200).send(clientes);
}

const updateClientes = async (req,res) => {
  console.log(req.body)
  const clientes = await clienteService.updateClientes(req.params.id,{
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    token: req.body.token
  });
  res.status(200).send(clientes);
}

const updateToken = async (req,res) => {
  console.log(req.body)
  const clientes = await clienteService.updateClientes(req.params.id,{
    token: req.body.token
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

const comprobarUsuario = async (req,res) => {
  const cliente = await clienteService.comprobarUsuario(req.body.email,req.body.password);
  console.log(cliente)
  res.send(cliente)
}

const comprobarToken = async (req,res) =>{
  const cliente = await clienteService.comprobarToken(req.params.id,req.body.token);
  // console.log(cliente)
  res.send(cliente).status(200)
}


module.exports={
    getClientes,
    postClientes,
    updateClientes,
    deleteClientes,
    comprobarUsuario,
    updateToken,
    comprobarToken
}