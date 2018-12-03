/* 在 node.js 當中，預設就有 npm (node package manager) 這個指令，可以用來管理、安裝、發布套件。 */
/* 有一個程式 main.js 用到 lodash 套件 。 */
var _ = require("lodash");

var set = _.intersection([1, 3, 7, 9], [2, 3, 8, 9]);
console.log("set=", set);