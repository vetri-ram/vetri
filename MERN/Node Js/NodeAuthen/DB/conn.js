const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB,(err,reult)=>{
 if(err) throw err;
 console.log("MongoDB Successfully Connected...!")
})

