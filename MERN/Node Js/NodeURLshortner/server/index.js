const express = require('express');
const app = express();
const mongoose = require('mongoose');

const {urlModal} = require('./Models/urlModel')

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home')
})

//create a short Url
app.post('/create', (req, res) => {
    let url = new urlModal({
        longurl:req.body.longurl,
        shorturl:"xyz"
    });
    url.save((err,data)=>{
        if(err) throw err;
        console.log(data);
    });
    
})

mongoose.connect('mongodb://localhost:27017/URL', (err, result) => {
    if (err) console.log(err)
    console.log(" Successfully Connected in MongoDB:::")
})

app.listen(5117, () => {
    console.log("Server is running on port 5117")
})