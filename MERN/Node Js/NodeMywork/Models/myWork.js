const mongoose = require('mongoose');

const myWorkSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const myWork = mongoose.model("mywork",myWorkSchema);

module.exports = {myWork};