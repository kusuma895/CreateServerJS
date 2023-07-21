var http=require('http');
var imp=require('./SecondModule');
http.createServer(function(res,req){
    res.writeHead(200,{'contentt-type':'text/html'});
    res.write(imp.myMsg());
    res.write("Hello");
     res.end();
}).listen(8080);  
console.log(imp.myMsg());
