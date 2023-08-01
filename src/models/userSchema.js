const mongoose = require('mongoose');
const playlist = require('./playlistSchema')


// Esquema para la información del usuario
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: {type:Number},
  password: {type:String},
  birthdate: { type: String },
  country: { type: String },
  premium: { type: Boolean, default: false },
  followers: { type: Number, default: 0 },
  playlists: [playlist.schema], // Referencia al esquema de las playlists
});

// Modelos basados en los esquemas
const User = mongoose.model('User', userSchema);


module.exports=User;
