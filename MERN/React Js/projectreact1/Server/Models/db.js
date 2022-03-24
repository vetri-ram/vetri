const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/Userdetails',err => {
    if(err) console.log("Error in DB connection")
    console.log("Successfully connected to MongoDB:::")
});