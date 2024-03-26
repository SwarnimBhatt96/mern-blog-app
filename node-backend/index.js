const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/register', (request, response)=>{
    response.json("test okk");
});

app.listen(4000);