/* 1 + 2 + 3 + ...... + 9 + 10 = 55*/
function sum(n) {
    var s = 0;
    for (i = 0; i <= 10; i++) s += i;
    return s;
}
SUM = sum(10);
console.log("1+2+3+...+10=", SUM);