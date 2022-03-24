require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const user = require('./Routes/useRouter')


const app = express();

app.use(express.json())

const port = process.env.PORT || 3005;

const URL = process.env.MONGO_URL
mongoose.connect(URL,(err,result) => {
    if(err) throw err;
    console.log("::: Sucessfully connected to MongoDB :::")
})
app.use('/',user)

app.listen(port, ()=>console.log('::: server is running on port :::', port))