var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

/* 给 onRequest() 函数加上一些逻辑，用来找出浏览器请求的 URL 路径 */
/* 可以通过请求的 URL 路径来区别不同请求了
    这使我们得以使用路由（还未完成）来将请求以 URL 路径为基准映射到处理程序上 */