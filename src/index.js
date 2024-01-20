const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { dotenv } = require('./constants');
const apiRoutes = require('../routes/api');
const { responseMiddleware } = require('./middlewares');
const { strReplace } = require('../helpers');
const { PORT, MONGO_DB_URL, DB_NAME, DB_PASSWORD, DB_USER } = dotenv;

const app = express();

app.use(express.json());
app.use(cors());
app.use(responseMiddleware)

app.use('/api/v1', apiRoutes);


const dbURI = strReplace(MONGO_DB_URL, [
    ['<username>', DB_USER],
    ['<password>', DB_PASSWORD],
    ['<database>', DB_NAME],
]);

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(`Error: ${error.message || "Something went wrong"}`)
    }
}

mongoose.connect(dbURI)
    .then(result => appStart())
    .catch(err => console.log(err));
