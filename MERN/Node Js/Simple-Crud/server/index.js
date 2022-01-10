const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host       : 'localhost',
    user       :  'root',
    password   :  'SubashVetri',
    database   :  'employeesystem',

});

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query('INSERT INTO employess (name, age , country, position, wage) values(?,?,?,?,?)',
    [name, age , country, position, wage], 
    (err, result) => {
        if(err){
            console.log("values are not inserted");
        }
        else{
            res.send("values are inserted...");
        }
    }
    );
    
});

app.get('/employees', (req, res) => {
    db.query("select * from employess", (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});