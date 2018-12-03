var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address: 解析網址
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties
    parse方法 返回一個包含url屬性的對象*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:
    query屬性 返回一個對象，其中包含所有querystring參數作為屬性*/
var qdata = q.query;
console.log(qdata.month);