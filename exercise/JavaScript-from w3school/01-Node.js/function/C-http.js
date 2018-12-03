var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(8888);

//向 createServer 函数传递了一个匿名函数。