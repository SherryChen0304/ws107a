var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(8080);

/* Add an HTTP Header 
    If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
    200 means that all is OK*/

//res.writeHead() method