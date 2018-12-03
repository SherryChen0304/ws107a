/* toUpperCase() toLowerCase() 大小寫轉換 */
s = "abCDEfg";
console.log("s=", s);
console.log("s.toUpperCase()=", s.toUpperCase());  // 轉大寫   ABCDEFG
console.log("s.toLowerCase()=", s.toLowerCase());  // 轉小寫   abcdefg
console.log("s=", s);  // 雖然做了轉大小寫的動作，但是不會改變 s 的值。 abCDEfg

/* trim() 空白去掉 */
y = "     abc      ";   // y 是一個有前後空白的字串
console.log("y=", y);
console.log("y.trim()=", y.trim()); // 把前後的空白去掉   abc


/* charAr() 從字串中取字元 */
console.log(b.charAt(4));   // 取出第 4 個字元   r
console.log(b.charAt(1));   // 取出第 4 個字元   s

/* charCodeAt() 轉字元為unicode 代碼 */
console.log("r of unicode=", b.charCodeAt(4));   // 取出第 4 個字元
console.log("s of unicode=", b.charCodeAt(1));   // 取出第 0 個字元

/* slice() 字串切割 */
console.log(b.slice(3)); // 切出第 3 個之後的內容
