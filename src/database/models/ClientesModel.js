const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db'); // Asegúrate de que la conexión a tu base de datos esté configurada correctamente.

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Esto hará que se incremente automáticamente el valor.
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Suponiendo que el email sea único
    validate: {
      isEmail: true // Valida que el valor ingresado sea un email
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'clientes', // Especifica el nombre de la tabla
  timestamps: false // Si no necesitas campos de fechas como createdAt y updatedAt
});

module.exports = Cliente;
