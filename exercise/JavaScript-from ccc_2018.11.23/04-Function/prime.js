/* 質數 */
function Prime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("Prime(33)=" + Prime(33));
console.log("Prime(17)=" + Prime(17));

for (var p = 1; p <= 100; p++) {
    if (Prime(p))
        console.log("Prime(" + p + ")");
}