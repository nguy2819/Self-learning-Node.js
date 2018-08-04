//Lesson 7
//Creating a server

var http = require('http');

//req = request
//res = response

//Client => request + request headers => Server
//Client <= response data + response headers <= Server

//Headers are just a little more information.
//For ex: the header says Content type - which telling browser that the server will response content
//Or for ex: the header says status - like 200 (means everything is ok) or 404 (the page cannot be found).


//Write response headers
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url); //request was made: /heydavid/iloveyou from 127.0.0.1:3000/heydavid/iloveyou
    res.writeHead(200,{'Content-Type': 'text/plain'}); //this is the way we write response header
    res.end('Hi Tien') //end with the content of the response and send it out to the browser
});
server.listen(3000, '127.0.0.1'); //this will start the server and very important.
console.log('now listen to the port 3000');