const { post } = require("../routes");
const Empleado = require('./../database/models/EmpleadosModel')
const bcrypt = require("bcrypt");


const getEmpleado = async () => {
    const empleado = await Empleado.findAll();
    return empleado;
}


const postEmpleado = async (user) => {
    const empleado = await Empleado.create(user)
    return empleado;

}

const updateEmpleado = async (id, user) => {
    const empleado = await Empleado.update(user, {
        where: { id_empleado: id }
    })
    return empleado;
}

const deleteEmpleado = async (id) => {
    const empleado = await Empleado.destroy({
        where: { id_empleado: id }
    })
    return empleado;
}


const comprobarUsuario = async (email, password, dni) => {
    try {
      console.log("🔍 Buscando usuario con dni:", dni);
      const dni = await Empleado.findOne({ where: { dni:dni } });
        if ( !dni){
            console.log("❌ Usuario no encontrado");
            return { status: 404, error: "Error en las credenciales" };
        }

      console.log("🔍 Buscando usuario con email:", email);
  
      const empleado = await Empleado.findOne({ where: { email:email } });
      console.log(empleado)
      if (!empleado) {
        console.log("❌ Usuario no encontrado");
        return { status: 404, error: "Error en las credenciales" };
      }
  
      console.log("✅ Usuario encontrado:", empleado.email);
      console.log("🔑 Comparando contraseñas...");
  
  
      console.log(password)
      console.log(empleado.password)
      
  
      const iguales = await bcrypt.compare(password, empleado.password);
    
      console.log("⚖ Resultado comparación:", iguales);
  
      if (!iguales) {
        console.log("❌ Contraseña incorrecta");
        return { status: 401, error: "Error en las credenciales" };
      }
  
      console.log("🔐 Contraseña correcta");
      // const token = createToken(usuario); 
  
      // return { status: 200, success: token };
      return {empleado}
    } catch (error) {
      console.error("💥 Error en comprobarUsuario:", error);
      return { status: 500, error: "Error al comprobar", details: error.message };
    }
  };

module.exports={
    getEmpleado,postEmpleado,updateEmpleado,deleteEmpleado
}