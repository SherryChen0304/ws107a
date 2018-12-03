//匿名函數
function execute(someFunction, value) {
    someFunction(value);
}

execute(function (word) { console.log(word) }, "Hello");

/* 在 execute 接受第一个参数的地方直接定义了我们准备传递给 execute 的函数。
    不用给这个函数起名字，这也是为什么它被叫做匿名函数 。 */