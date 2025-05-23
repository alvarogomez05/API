const EmpleadosService = require('./../services/EmpleadosService')
const bcrypt = require("bcrypt");

const getEmpleado = async (req, res) => {
    const empleados = await EmpleadosService.getEmpleado();
    res.status(200).send(empleados);
}

const postEmpleado = async (req, res) => {
    //   console.log(req.body)

    const empleados = await EmpleadosService.postEmpleado({
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        cargo: req.body.cargo,
        email: req.body.email,
        telefono: req.body.telefono,
        salario: req.body.salario,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    res.status(200).send(empleados);
}

const updateEmpleado = async (req, res) => {
    const empleados = await EmpleadosService.updateEmpleado(req.params.id, {
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        cargo: req.body.cargo,
        email: req.body.email,
        telefono: req.body.telefono,
        salario: req.body.salario,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    res.status(200).send(empleados);
}

const deleteEmpleado = async (req, res) => {
    try {
        const empleados = await EmpleadosService.deleteEmpleado(req.params.id);

        // Si el empleado fue eliminado correctamente
        res.send({
            status: 200,
            ok: true,
            message: 'Empleado eliminado exitosamente'
        });
    } catch (error) {
        // En caso de error
        console.error(error); // Log del error en el servidor

        res.status(500).send({
            status: 500,
            ok: false,
            message: 'Error al eliminar el empleado',
            error: error.message
        });
    }

}

const comprobarUsuario = async (req,res) => {
  const empleado = await EmpleadosService.comprobarUsuario(req.body.email,req.body.password,req.body.dni);
  console.log(empleado)
  res.send(empleado)
}

module.exports = {
    getEmpleado, postEmpleado, updateEmpleado, deleteEmpleado, comprobarUsuario
}