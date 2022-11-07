import mongoose from 'mongoose';
import {DB,DBATLAS} from '../config/config.js';



export const getConnection = async () => {
  try {
    await mongoose.connect(DBATLAS, {
         useNewUrlParser: true, 
         useUnifiedTopology: true, 
        });
    return 'Conexión correcta :)';
  }
  catch (error) {
    return 'Error en la conexión :('
  }
}

