import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    DATABASE_LOCAL_URL,
    DATABASE_URL
} = process.env;