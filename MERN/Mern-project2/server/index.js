const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
app.get('/', (req,res) => {
    res.send("Hi Subash Vetri");
});
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

//router
const infoRouter = require("./router");
app.use('/info', infoRouter);

app.listen(8000,()=>{
    console.log("Server is Started on port 8000");
});

mongoose.connect('mongodb://localhost:27017/crudtutorials',(err,result)=>{
    if(err) {
        console.log(err);
    }
    console.log(" Successfully Connected to mongodb...")
})