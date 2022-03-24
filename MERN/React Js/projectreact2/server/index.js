const dotenv = require('dotenv');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
require('./DB/conn');
app.use(express.json());
// const User = require('./Model/userSchema');

app.use(require('./Controller/userAuth'));


const PORT = process.env.PORT;



//middlewares
app.use(express.json());
app.use(morgan('dev'));

const middleware = (req,res,next) => {
    console.log("this is my middleware")
    next();
};


app.get('/',(req,res)=>{
       res.send("<h2>Hello Subash Vetri from Server</h2>");
});

app.get('/about', middleware, (req,res)=>{
    res.send("<h2>am MERN Developer. am from mayiladuthurai.</h2>");
});


app.listen(PORT,()=>{
    console.log(`Server is Successfully Running on port ${PORT}....`)
})