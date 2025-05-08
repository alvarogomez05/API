const bodyParser = require("body-parser");
const express = require("express");

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



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
