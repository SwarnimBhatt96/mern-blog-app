const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const CONSTANTS = require('./constants');

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const secretSalt = "redxcftvg4b5h63rwe37tdvguhbnj";

try {
    mongoose.connect(CONSTANTS.MONGO_DB_URL);
}
catch (e) {
    console.log(e)
}
app.post('/register', async (request, response) => {
    const { username, password } = request.body;

    try {
        const userDoc = await User.create({ username, password });
        response.json(userDoc);
    }
    catch (e) {
        response.status(400).json(e);
    }

});

app.post('/login', async (request, response) => {
    const { username, password } = request.body;
    const userDoc = await User.findOne({ username });
    const isValidUserLogin = password == userDoc.password;
    if (isValidUserLogin) {
        try {
            const token = jwt.sign({ username, id: userDoc._id }, secretSalt,)
            response.cookie("token", token).json("ok");
        }
        catch (e) {
            console.error(e);
        }

    }
    else {
        response.status(400).json("Wrong credentials");
    }
});

app.listen(4000);