const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb'); // Asumo que el archivo se encuentra en la misma carpeta que server.js

const app = express();

// Configurar el middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());

// Configurar el middleware para parsear datos JSON
app.use(express.json());

// Configurar el middleware para parsear datos de formulario
app.use(express.urlencoded({ extended: true }));

// Inicia la conexion con MongoDB
connectDB();

// Ruta base para registrar usuarios
const userRoute = require('./routes/user');
app.use('/create', userRoute);

// Iniciar el servidor en el puerto 3333
app.listen(3333, () => {
  console.log('Servidor escuchando en http://localhost:3333');
});
