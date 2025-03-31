const { DataTypes } = require('sequelize');
const sequelize = require('./../../config/db'); // Asegúrate de que la conexión a tu base de datos esté configurada correctamente.

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Esto hará que se incremente automáticamente el valor.
    allowNull: true
  },
 nombre: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         isAlpha: {
           args: true,
           msg: 'El nombre solo puede contener letras',
         },
         len: {
           args: [3, 50],
           msg: 'El nombre debe tener entre 3 y 50 caracteres',
         },
       },
     },
     apellido1: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         isAlpha: {
           args: true,
           msg: 'El apellido solo puede contener letras',
         },
         len: {
           args: [3, 50],
           msg: 'El apellido debe tener entre 3 y 50 caracteres',
         },
       },
     },
     apellido2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'El apellido solo puede contener letras',
        },
        len: {
          args: [3, 50],
          msg: 'El apellido debe tener entre 3 y 50 caracteres',
        },
      },
    },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Suponiendo que el email sea único
    validate: {
      isEmail:{
        msg: "El email no cumple el formato requerido"  
      }
    }
  },
  password: {
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
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Clientes', // Especifica el nombre de la tabla
  timestamps: false // Si no necesitas campos de fechas como createdAt y updatedAt
});

module.exports = Cliente;
