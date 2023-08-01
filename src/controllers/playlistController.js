const playlistSchema = require("../models/playlistSchema");
const userSchema = require("../models/userSchema");


exports.createPlaylistForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const {nombre ,canciones} = req.body;
    const userExisting = await userSchema.findById(userId);

    if(!userExisting) {
        res.status(404).json({message: 'Usuario no encontrado'})
    }
    

    const newPlaylist = new playlistSchema({nombre,canciones});
    userExisting.playlists.push(newPlaylist);
    const updatedUser = await userExisting.save();

    res.json(updatedUser)

  } catch (error) {
    res.status(500).json({message: error.message})

  }
};

module.exports={createPlaylistForUser}