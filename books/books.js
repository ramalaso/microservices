const express = require('express');
const app = express();

const mongoose = require('mongoose');
//Connect 
mongoose.connect('mongodb://localhost:27017/microservices', () => {
    console.log('DB connected.');
});

app.get('/', (req, res) => {
    res.send('This is our main end point...');
});

app.listen(4545, () => {
    console.log('App listening on port 4545!: This is our book service');
});