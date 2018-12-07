var express = require("express");
var app = express();
var port = 3200;

app.get('/', function(req, res){ 
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Ok!.......");
} );

app.post('/' , function(req, res){ 

    res.writeHead(200, {"Content-Type":  "text/plain"} );
    res.end("post request received ........");
    
});

app.listen(port, function(){
    console.log(`listen on port ${port}`);
});
