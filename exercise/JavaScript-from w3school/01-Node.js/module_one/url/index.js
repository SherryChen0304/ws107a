var server = require("./mixserver");
var router = require("./router");

server.start(router.route);