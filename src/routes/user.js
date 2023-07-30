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


//solicitar informacion de un usuario especifico.
router.get('/users/:userId', async (req,res) =>{
  try{
    const userId= req.params.userId;
    const user = await userSchema.findById(userId);
    if(!user){
     return res.status(404).json({message: 'Usuario no encontrado.'})
    }
    res.json(user);
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

// solicitar todos los usuarios registrados.
router.get('/users', async (req, res) => {
  try {
    const users = await userSchema.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios.' });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//eliminar un usuario por id.
router.delete('/users/:userId', async (req,res) =>{
  try{
    const userId= req.params.userId;
    const existingUser = await userSchema.findById(userId);

    if(!existingUser){
      return res.status(404).json({message: 'No existe este usuario: '+userId});
    }
    await userSchema.deleteOne({ _id: userId });
    res.json({message: 'Usuario eliminado correctamente: '+userId})
  }catch(error){
   res.status(500).json({message: error.message});
  }
})

//editar datos de un usuario ya creado.

router.put('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Verificar si el usuario existe en la base de datos
    const existingUser = await userSchema.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: 'No existe este usuario.' });
    }

    // Actualizar los datos del usuario con los nuevos datos del cuerpo de la solicitud
    existingUser.set(req.body);
    
    // Guardar los cambios en la base de datos
    const updatedUser = await existingUser.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;