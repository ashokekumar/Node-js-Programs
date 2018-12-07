var http = require("http");
var port = 3000;


var server = http.createServer( function(req, res){ 

    res.writeHead(200 , {"Content-Type": "text/plain"});
    res.end("Server created.....");

} );

server.listen(port , function( ){ console.log(`server is listening on ${port} `) } );

