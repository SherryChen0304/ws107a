/* 匿名函數 
   必須注意的是，函數應該先定義之後再使用(顯示)。*/
// solution1：直接宣告函數
function sub(a, b) {
    return a - b;
}

// solution2：將匿名函數指定給變數。
var add = function (a, b) {
    return a + b;
}
console.log("add(3,5)=", add(3, 5), " sub(7,2)=", sub(7, 2));