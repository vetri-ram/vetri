const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type' : 'text/html'
    });
}).listen()