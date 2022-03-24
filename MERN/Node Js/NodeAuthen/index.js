const dotenv = require('dotenv');
const express = require('express');
const app = express();
const authRouter = require('./Routes/authRoutes');
const cookieParser = require('cookie-parser');
dotenv.config({path:'./.env'});
require('./DB/conn');
app.use(cookieParser());
app.use(express.json());

//Routes

app.use('/', authRouter);

app.get('/',(req,res)=>{
    res.send("<h2>Hello world</h2>")
})

app.listen(5050, ()=>{
    console.log("server is running on Port 5050");
})