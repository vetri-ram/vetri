require("dotenv").config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const employeeRoutes = require('./Routes/employeeRoutes')

app.use(express.json())

const port = process.env.PORT || 5000;

const URL = process.env.MONGO_URL
mongoose.connect(URL,(err,result) => {
    if(err) throw err;
    console.log("::: Sucessfully connected to MongoDB :::")
})

app.use('/employee', employeeRoutes);

app.listen(port, ()=>console.log('::: server is running on port :::', port))