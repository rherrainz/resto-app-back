import mongoose from 'mongoose';
import {DB} from '../config/config.js';



export const getConnection = async () => {
  try {
    await mongoose.connect(DB, {
         useNewUrlParser: true, 
         useUnifiedTopology: true, 
        });
    return 'Conexión correcta :)';
  }
  catch (error) {
    return 'Error en la conexión :('
  }
}

