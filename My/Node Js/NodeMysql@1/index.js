const express = require('express');
const mysql = require('mysql2');

//create Connection
const db = mysql.createConnection({
    host       : 'localhost',
    user       : 'root',
    password   : 'SubashVetri',
    database   : 'nodemysql'
   
});
   db.connect((err) => {
       if(err) 
       {
           throw err;
       }
       console.log('Mysql Connected....');
   });

const app = express();

// Create DB

 app.get('/createdb', (req, res) => {
   let sql = 'Create Database nodemysql';
   db.query(sql, (err,result) =>{
        if (err) throw err;
        console.log(result);
        res.send('Database Created....');
     });
 });

 app.get('/createpoststable', (req, res) => {
    let sql = 'create Table mytable(id int AUTO_INCREMENT, title VARCHAR(300), age varchar(30), body VARCHAR(300), PRIMARY KEY (id))';
     db.query(sql, (err,result) => {
         if(err) throw err;
         console.log(result);
         res.send('posts table created....');
     });
 });

app.get('/inserttable', (req, res) => {
    let sql = 'insert into mytable(title,age,body) values("this is my first", 32, "insert my table")';
     db.query(sql, (err,result) => {
         if(err) throw err;
         console.log(result);
         res.send('values are inserted....');
     });
 });

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
