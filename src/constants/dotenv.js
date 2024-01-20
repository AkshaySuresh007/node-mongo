require('dotenv').config();

const dotenv = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
}

module.exports = dotenv;