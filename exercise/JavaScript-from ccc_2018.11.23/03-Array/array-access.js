a = [0, 1, 2];
console.log("a[0]=", a[0]);
console.log("a[2]=", a[2]);
console.log("a[3]=", a[3]);
console.log("a[9]=", a[9]);
a[9] = 9;
console.log("a=", a);
a[0] = 7;
console.log("a=", a);

/* concat() 兩陣列連接 */
console.log(a.concat([6, 7, 8]));
console.log("a=", a);    // 將兩陣列連接起來後傳回，但必須注意這並不會改變 a 的內容。

b = a.concat([6, 7, 8]);
console.log("b=", b);