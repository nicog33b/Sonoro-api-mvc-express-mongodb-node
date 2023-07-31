const mongoose = require('mongoose');
// Esquema para la información de las canciones dentro de la playlist
const songSchema = new mongoose.Schema({
    idTrack: { type: String },
    titulo: { type: String },
    artista: { type: String },
    duracion: { type: Number },
  });
  

  const Song = mongoose.model('Song', songSchema);

  module.exports= Song;