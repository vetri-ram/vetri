const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
        
    },
    city:{
        type:String,
        required:true
        
    },
    createdTime:{
        type:Date,
        default:Date.now
        
    }
})

module.exports = mongoose.model("info", infoSchema);