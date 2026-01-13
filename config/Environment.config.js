import dotenv from 'dotenv';


dotenv.config();

const ENVIRONMENT ={
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    GMAIL_USERNAME: process.env.GMAIL_USERNAME,
    URL_FRONTEND: process.env.URL_FRONTEND
}

export default ENVIRONMENT;