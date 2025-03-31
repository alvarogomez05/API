const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db');


  const Compra = sequelize.define('Compra', {
    id_compra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true, // Asegura que sea un número entero
        min: 1, // Valor mínimo válido para ID
      },
    },
    // productos: {
    //   type: DataTypes.JSON, // Almacena productos como un JSON (por ejemplo, lista de objetos)
    //   allowNull: false,
    //   validate: {
    //     notEmpty: true, // No puede estar vacío
    //   },
    // },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Fecha por defecto es la actual
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true, // Asegura que sea un número flotante
        min: 0.0, // El total no puede ser negativo
      },
    },
  }, {
    tableName: 'Compras', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactiva createdAt y updatedAt
  });

  module.exports = Compra;