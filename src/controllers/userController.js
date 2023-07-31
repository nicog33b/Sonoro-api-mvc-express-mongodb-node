const userSchema = require('../models/userSchema');

// Controlador para registrar un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { name, email, birthdate, country, premium, followers, playlists } = req.body;
    const newUser = new userSchema({ name, email, birthdate, country, premium, followers, playlists });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener un usuario por su ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userSchema.findById(userId).select('-playlists'); // Excluir el campo playlists

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener todos los usuarios registrados
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userSchema.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios.' });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para eliminar un usuario por su ID
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const existingUser = await userSchema.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: 'No existe este usuario: ' + userId });
    }
    await userSchema.deleteOne({ _id: userId });
    res.json({ message: 'Usuario eliminado correctamente: ' + userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para editar datos de un usuario ya creado
exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const existingUser = await userSchema.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: 'No existe este usuario.' });
    }

    existingUser.set(req.body);
    const updatedUser = await existingUser.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
