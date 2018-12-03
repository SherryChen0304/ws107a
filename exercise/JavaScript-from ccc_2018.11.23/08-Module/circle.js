var PI = 3.14;
Circle = function (radius) {
    this.radius = radius
    this.area = function () {
        return PI * this.radius * this.radius;
    }
};

module.exports = Circle;
module.exports.PI = PI;
/* 將 PI 獨立塞到 module.exports 裏了吧！ 
    因為只有這樣才能讓外面的模組在不執行物件建構函數 (不建立物件) 的情況之下就能存取 PI。 */