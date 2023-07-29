const mongoose = require('mongoose')
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://sonoro:oLEkSRAHNz5SLVDQ@sonorocluster.edm7rxs.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión a MongoDB exitosa');
    } catch (error) {
      console.error('Error de conexión a MongoDB:', error);
    }
  };
  
  module.exports = connectDB;