const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const cors = require("cors")
const users = require('./routers/users');
const userinfo = require('./routers/info');
const auth = require("./routers/auth");
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/info',userinfo);
app.use("/api/auth",auth);
// checks that the private key is set.
if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR:jwtPrivateKey is not defined.');
}

// connect to MongoDB.
async function connect() {
    try {
        await mongoose.connect(config.get('db'));
        console.log(`Connected to ${config.get('db')}`);
    }
    catch (e) {
        console.log(`DB connection Error: ${e}`);
    }
}

connect();

// setting a listener.
const port = (process.env.port || 3000);
const server = app.listen(port, () => { console.log(`lisening on port ${port}...`) });
module.exports = server;

