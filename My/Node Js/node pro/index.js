let http=require("http");
let m=require("./export");
http.createServer(function(req,res){
    res.writeHead(200,{
"content-Type":"text/Html"
    });
    res.write("DATE="+m.date);
    res.end("<h1>"+m.a+"</h1>");
}).listen(8080);