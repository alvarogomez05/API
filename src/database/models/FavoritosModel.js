const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db');


  const Favorito = sequelize.define('Favorito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Incremento automático para la clave primaria
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true, // Asegura que sea un entero
        min: 1, // ID válido mínimo
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
  }, {
    tableName: 'Favoritos',
    timestamps: false, // No se utilizan createdAt ni updatedAt
  });

  module.exports = Favorito;