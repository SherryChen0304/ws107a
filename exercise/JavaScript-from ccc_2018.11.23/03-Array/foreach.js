/* foreach 語句採用 for (i in c) 
   其中的 c 必須是個陣列或容器，而 i 則是索引值(不是內容)。 */
var a = [6, 5, 4, 3, 2, 1];

for (i in a) console.log("a[%d]=%d", i, a[i]);