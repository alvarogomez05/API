const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5002;

const Sequelize = require("./config/db")
const { sequelize, Cliente, Carrito, Favoritos, Compras, Producto, Empleados } = require('./database/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./routes/index");

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync({force:false}).then(()=> console.log("conectado a la bd"))
});
// 
