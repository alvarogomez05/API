const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db'); // Asegúrate de que la conexión a tu base de datos esté configurada correctamente.


const Producto = sequelize.define('Producto',{
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 255],
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        validate: {
          len: [0, 1000],
        },
      },
      precio: {
        type: DataTypes.FLOAT, // Ahora es FLOAT para mayor rango
        allowNull: false,
        validate: {
          isFloat: true,
          min: 0.01, // Mínimo valor permitido
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 0,
        },
      },
      categoria: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      imagen: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      },
    }, {
      tableName: 'Productos',
      timestamps: false,
    });

module.exports = Producto;