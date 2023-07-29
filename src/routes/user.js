const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema');

// Ruta POST para registrar un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const { name, email, birthdate, country, premium, followers, playlists } = req.body;
    // Crea una nueva instancia del modelo userSchema con los datos recibidos en el cuerpo de la solicitud
    const newUser = new userSchema({ name, email, birthdate, country, premium, followers, playlists});
    // Guarda el nuevo usuario en la base de datos
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

