const { post } = require("../routes");
const Empleado = require('./../database/models/EmpleadosModel')

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


module.exports={
    getEmpleado,postEmpleado,updateEmpleado,deleteEmpleado
}