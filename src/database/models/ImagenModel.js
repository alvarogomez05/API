const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db');

const Imagen =sequelize.define('Imagen',
  {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Esto hará que se incremente automáticamente el valor.
        allowNull: true
    },
    Imagen: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    Id_producto: { 
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'productos', 
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    modelName: 'Imagen',
    tableName: 'Imagenes',
    timestamps: false,
    underscored: true,
  }
);

module.exports = Imagen;
