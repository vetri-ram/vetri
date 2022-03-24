const express = require('express');
const db = require('./Models/db');
const app = express();
const cors = require('cors');
const router = require('./Routes/userRouter');


app.get('/',(req,res) => {
    res.send("<h3>Hai Vetri. This is Ur First Backend Project</h4>")
})
app.use(cors());
app.use(express.json())


app.use('/users', router)

app.listen(5111, ()=>{
    console.log("Server is successfully running on port 5111....")
})