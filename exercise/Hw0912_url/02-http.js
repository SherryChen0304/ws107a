const http = require('http')

const server = http.createServer(function (req, res) {

    switch (req.url) {
        case '/hello':
            res.writeHead(200, { 'Content-Type': 'text/plain ; charset= UTF-8' });
            res.end("你好");
            break;
        case '/name':
            res.writeHead(200, { 'Content-Type': 'text/plain ; charset= UTF-8' });
            res.end('姓名：陳士茵');
            break;
        case '/id':
            res.writeHead(200, { 'Content-Type': 'text/plain ; charset= UTF-8' });
            res.end('學號：110610529');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain ; charset= UTF-8' });
            res.end('已連結！');
            break;
    }
})

server.listen(3000)

console.log('Server running at http://localhost:3000')