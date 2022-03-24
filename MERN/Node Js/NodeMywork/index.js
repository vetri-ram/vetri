const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
require('./DB/conn.js');
const workRouter = require('./Routes/myWorkRoutes');

const port = process.env.PORT || 7822;

app.use(express.json());

app.use('/', workRouter);

app.get('/', (req,res)=>{
    res.send("<h2>Hi am from index</h2>")
})

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})