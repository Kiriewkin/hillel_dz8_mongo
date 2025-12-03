import dotenv from 'dotenv';
dotenv.config();

export const DB_NAME = process.env.DB_NAME;
export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;