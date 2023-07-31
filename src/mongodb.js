const mongoose = require('mongoose')

const dotenv = require('dotenv');

dotenv.config();


const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@sonorocluster.edm7rxs.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión a MongoDB exitosa');
    } catch (error) {
      console.error('Error de conexión a MongoDB:', error);
    }
  };
  
  module.exports = connectDB;