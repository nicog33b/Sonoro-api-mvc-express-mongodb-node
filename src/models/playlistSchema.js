const mongoose = require('mongoose');
const Song = require('./songSchema.')
  
// Esquema para las playlists
const playlistSchema = new mongoose.Schema({
    nombre: { type: String },
    canciones: [Song.schema] // Referencia al esquema de las canciones
  });

  
  
  const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports= Playlist;
