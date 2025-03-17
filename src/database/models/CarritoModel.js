const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db');

  const Carrito = sequelize.define('Carrito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Incremento automático para el identificador único
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true, // Asegura que sea un número entero
        min: 1, // Valor mínimo permitido para IDs
      },
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
      },
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true, // Asegura que sea un número flotante
        min: 0.0, // No permite valores negativos
      },
    },
  }, {
    tableName: 'Carrito',
    timestamps: false, // No se necesitan campos createdAt ni updatedAt
  });

  module.exports = Carrito;