const mongoose = require('mongoose');

const db = process.env.DB;

mongoose.connect(db,(err,result)=>{
    if(err) console.log("No Connection")
    console.log(" Successfully Connected MongoDB....")
})


