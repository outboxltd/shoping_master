const mongoose = require('mongoose');
mongoose.connect('mongodb://outbox:19371937@ds227858.mlab.com:27858/shoping_list');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('concted to the db')
});

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    city: String,
    age: String,
    date: { type: Date, default: new Date() }
});

const User = mongoose.model('User', userSchema);

// -----------------------------------------------

const itemSchema = mongoose.Schema({
    itemName: String,
    itemColor: String,
    itemPrice: String,
    itemAmunt: Number
});

const Item = mongoose.model('Item', itemSchema);

// -----------------------------------------------



module.exports = { 
    User, 
    Item
};