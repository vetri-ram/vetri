const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine','ejs');
app.get('/', (req,res) => {
    res.render('home');
});
app.get('/course', (req, res) => {
    res.render('course');
});
app.get('/exam', (req,res) => {
    res.render('exam');
});
app.get('/viewquestion', (req, res) => {
    res.render('viewquestion');
});
app.get('/addquestion', (req,res) => {
    res.render('addquestion');
});
app.get('/result', (req, res) => {
    res.render('result');
});
app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
});