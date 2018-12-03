/* str.substr(start[, length]) : 第二個參數是長度
   str.substring(indexStart[, indexEnd]) : 第二個參數是結尾的位置 */

x = "0123456789";
console.log("x=", x);

console.log("x.substr(3,2)=", x.substr(3, 2));    // 從第 3 個開始取出長度為 2 的子字串。  34
console.log(x.substr(4, 5));    // 從第 4 個開始取出長度為 5 的子字串。  45678

console.log("x.substring(3,7)=", x.substring(3, 7));  // 取出從第 3 個開始到第 7 個之前的子字串。(不包含第 7 個)  3456
console.log(x.substring(3, 9));  // 取出從第 3 個開始到第 9 個之前的子字串。(不包含第 9 個)  345678

console.log("length=", x.length);

/* concat() 字串連接 */
a = "I am";
b = " sherry";
console.log(a.concat(b));
console.log(a.concat(' chen'));
c = a.concat(b);
console.log(c.concat(' chen'));