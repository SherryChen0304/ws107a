var _ = require('lodash');

var c1 = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
console.log('c1=', c1)
var c2 = _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
console.log('c2=', c2)

/* _.chunk(array, [size=0])
    将数组拆分成多个 size 长度的块，并组成一个新数组。 
    如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。

    参数
    array (Array) 需要被处理的数组

    [size=0] (number) 每个块的长度 
*/