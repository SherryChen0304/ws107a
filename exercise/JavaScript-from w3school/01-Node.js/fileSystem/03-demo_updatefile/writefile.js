var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

/* 替換指定的文件和內容 */
//fs.writeFile() method