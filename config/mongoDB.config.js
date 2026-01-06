import mongoose from 'mongoose';
import ENVIRONMENT from './Environment.config.js';

const connection_string = `${ENVIRONMENT.MONGO_DB_URI}/${ENVIRONMENT.MONGO_DB_NAME}`

export async function connectMongoDB() {   
    try {
        await mongoose.connect(
            connection_string,
        )
        console.log("conexion a mongoDB exitosa")
    }
    catch (error) {
        console.error("la conexion a MongoDB fallo")
        console.error(error)
    }

}


