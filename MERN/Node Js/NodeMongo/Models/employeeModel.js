const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fulName:{
        type:"String"
    },
    email:{
        type:"String"
    },
    mobile:{
        type:"String"
    },
    city:{
        type:"String"
    }
})

module.exports = mongoose.model('Employee', employeeSchema);