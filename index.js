require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const db = require('./src/configs/db.config');
const connection = db.createConnection();

// middlewares
app.use(express.json());

// rutas
const usuariosRouter = require('./src/routes/usuarios.route');
const ventasRouter = require('./src/routes/ventas.route');

app.use('/usuarios', usuariosRouter);
app.use('/ventas', ventasRouter);

app.listen(PORT, () => {
    console.log(`API corriendo en el puerto ${PORT}`);
});