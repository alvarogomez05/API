const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No puede estar vacío
        len: [2, 255], // Longitud mínima y máxima
      },
    },
    apellido1:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No puede estar vacío
        len: [2, 255], // Longitud mínima y máxima
      },
    },
    apellido2:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No puede estar vacío
        len: [2, 255], // Longitud mínima y máxima
      },
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No puede estar vacío
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el email sea único
      validate: {
        isEmail: true, // Asegura que sea un formato de email válido
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true, // Solo números
        len: [9], // Rango de longitud (puedes ajustarlo según tus necesidades)
      },
    },
    salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true, // Asegura que sea un número flotante
        min: 0.01, // Salario mínimo
      },
    },password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,100}$/],
          msg: "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial (Ejemplo: Abcdef1!)."
        },
        len: {
          args: [8, 100],
          msg: "La contraseña debe tener entre 8 y 100 caracteres."
        },
      },
    },
  }, {
    tableName: 'Empleados',
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  });

  module.exports = Empleado;