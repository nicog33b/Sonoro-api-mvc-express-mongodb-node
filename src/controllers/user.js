const userSonoro = require('../models/userSchema');

async function registerUser(name, email, birthdate,country,premium,followers,playlists) {
  try {
    const newUser = new userSonoro({ name, email,birthdate,country,premium,followers,playlists});
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  registerUser,
};
