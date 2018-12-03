/* 參數的傳遞 */
function modify(num, array) {
    num += 1;
    array[0] += 1;
}

var n = 2, a = [3, 2, 1];

modify(n, a);
console.log("n=", n, " a=", a);