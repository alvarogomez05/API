const { post } = require("../routes");
const Cliente = require("./../database/models/ClientesModel")
const bcrypt = require("bcrypt");


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

const updateToken = async (id,user) => {
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

const comprobarUsuario = async (email, password) => {
  try {
    console.log("🔍 Buscando usuario con email:", email);

    const usuario = await Cliente.findOne({ where: { email:email } });
    console.log(usuario)
    if (!usuario) {
      console.log("❌ Usuario no encontrado");
      return { status: 404, error: "Error en usuario y/o contraseña" };
    }

    console.log("✅ Usuario encontrado:", usuario.email);
    console.log("🔑 Comparando contraseñas...");


    console.log(password)
    console.log(usuario.password)
    

    const iguales = await bcrypt.compare(password, usuario.password);
  
    console.log("⚖ Resultado comparación:", iguales);

    if (!iguales) {
      console.log("❌ Contraseña incorrecta");
      return { status: 401, error: "Error en usuario y/o contraseña" };
      
    }

    console.log("🔐 Contraseña correcta");
    // const token = createToken(usuario); 

    // return { status: 200, success: token };
    return {usuario}
  } catch (error) {
    console.error("💥 Error en comprobarUsuario:", error);
    return { status: 500, error: "Error al comprobar", details: error.message };
  }
};

const comprobarToken = async (id,token) => {
  console.log("AAAAAAAAAAAAAA")
  const usuario = await Cliente.findOne({ where: { id_cliente:id,token: token} });

  if(usuario){
    console.log("el usuario existe");
    return usuario;

  }else{
    console.log("no existe el usuario")
    return {status: 401, message: "El usuario no existe o el token es incorrecto"}
  }
}

module.exports = {
    getClientes,
    postClientes,
    updateClientes,
    deleteClientes,
    comprobarUsuario,
    updateToken,
    comprobarToken
  }