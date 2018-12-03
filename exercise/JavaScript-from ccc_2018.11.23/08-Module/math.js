/* module.exports = <object> */
/* 引入自己定義的模組，必須指定路徑，
    如果兩者放在同一個資料夾，必須加上「./」的符號，
    告訴node.js該檔案在同一個資料夾底下。 */
/* 系統預設的模組或npm安裝的套件，就不用加./，直接寫模組名稱即可。*/
// 靜態模組：匯出物件
var math = {
    PI: 3.14,
    square: function (n) {
        return n * n;
    }
}

module.exports = math;