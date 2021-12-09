var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'SubashVetri',
  
});
 
connection.connect(function(err){
 if (err) throw err;
 console.log("connected");
 connection.query("create database mydb1",function(err,result){
   if (err) throw err;
   console.log("database created");
 });
});
 

 


 