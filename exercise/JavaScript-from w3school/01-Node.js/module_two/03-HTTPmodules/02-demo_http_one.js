var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

/* Use the createServer() method to create an HTTP server:
    Node.js as a Web Server */

//http.createServer() method