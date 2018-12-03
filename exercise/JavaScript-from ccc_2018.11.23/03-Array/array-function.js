a = [1, 2, 3];
console.log("a=", a);

/* push() 從陣列的尾端新增 */
console.log("the value of push:", a.push(4));  //推入值 4
console.log("a=", a);
console.log("the value of push:", a.push(5));  //推入值 5
console.log("a=", a);

/* 將陣列連接成一個字串 (預設連接符號為 ,) */
console.log("become to string from array:", a.join());
console.log("by':' =", a.join(':'));

/* pop() 從陣列的尾端刪除 */
console.log("the value of pop:", a.pop());  //彈出值 5
console.log("a=", a);

/* reverse() 陣列反轉 */
console.log("a=", a.reverse());
console.log("a=", a);   //原本的 a 被修改成反轉後的狀態

/* shift() 從陣列的前端刪除 */
console.log("the value of shift:", a.shift());  //取出值 5
console.log("a=", a);   // shift 之後，頭部的元素就真的被移除了

/* short() 將陣列排序 (預設為由小到大排列) */
console.log("a=", a.sort());

/* slice() 取出陣列中的一段 */
b = a.concat([4, 5, 6]);
console.log("b=", b);
console.log(b.slice(2, 4)); //第 2 個到第 4 個之間的子陣列。 (注意：這只會傳回 b[2], b[3], 不包含 b[4])
console.log(b.slice(2, 6));
console.log("b=", b); // 不改變

/* splice 的功能有點複雜，是將指定的 (1,3) 區間移除後，再插入後面的那些元素。*/
r = b.splice(1, 3, "a", "b", "c", "d");
console.log("the value of delete:", r); // (1,3) 區間 包含 b[3]
console.log(b); //塞入了 "a", "b", "c", "d" 這四個元素