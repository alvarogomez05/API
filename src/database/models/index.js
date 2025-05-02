
const { Sequelize } = require('sequelize');
const sequelize = require('./../../config/db');

const Cliente = require('./ClientesModel')
const Producto = require('./ProductosModel')
const Carrito = require('./CarritoModel')
const Favoritos = require('./FavoritosModel')
const Compras = require('./ComprasModel')
const Empleados = require('./EmpleadosModel')



// Asociaciones
Cliente.hasMany(Carrito, { foreignKey: 'id_clientes' });
Cliente.hasMany(Favoritos, { foreignKey: 'id_clientes' });
Cliente.hasMany(Compras, { foreignKey: 'id_cliente' });

Carrito.belongsTo(Cliente, { foreignKey: 'id_clientes' });
Favoritos.belongsTo(Cliente, { foreignKey: 'id_clientes' });
Compras.belongsTo(Cliente, { foreignKey: 'id_cliente' });

Producto.belongsToMany(Carrito, { through: Carrito, foreignKey: 'id_producto' });
Producto.belongsToMany(Favoritos, { through: Favoritos, foreignKey: 'id_producto' });
Producto.belongsToMany(Compras, { through: Compras, foreignKey: 'id_producto' });


Carrito.belongsTo(Producto, { foreignKey: "id_producto" });
Favoritos.belongsTo(Producto, { foreignKey: "id_producto" });
Compras.belongsTo(Producto,  {foreignKey: 'id_producto'} );

module.exports = {
    sequelize,Cliente,Carrito,Favoritos,Compras,Producto,Empleados
}