const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  birthdate: { type: String },
  country: { type: String },
  premium: { type: Boolean, default: false},
  followers: { type:Number, default:0},
   playlists: [{ nombre: String,canciones:[{idTrack:String,titulo: String,artista: String,duracion: Number,}],}]
});



module.exports = mongoose.model('userSonoro', userSchema);
