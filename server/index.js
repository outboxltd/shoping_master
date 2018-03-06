const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path');
const app = express();
const dbConnction = require('./models/db.js')



const userRouter = require('./routes/user');
const itemRouter = require('./routes/item');

app.use(express.static('../client/dist'));
app.use(bodyParser.json());

app.use(session({
    secret: 'bla bla bla',
    resave: false,
    saveUninitialized: true
}))

app.use('/api/user', userRouter);
app.use('/api/item', itemRouter);



app.all('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('connected!')
});