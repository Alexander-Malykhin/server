require('dotenv').config()
const express = require('express');
const cors = require('cors')
const database = require('./config/database')
const app = express();

app.use(cors());

app.use(express.json());


const startServer = () => {
    try {
        app.listen(process.env.DB_PORT, async () => {
            await database.sync()
            console.log(`Server started! ${process.env.DB_PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();
