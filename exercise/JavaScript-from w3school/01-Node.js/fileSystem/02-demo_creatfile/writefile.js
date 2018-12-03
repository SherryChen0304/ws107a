var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

/* 替換指定的文件和內容（如果存在）。如果該文件不存在，將創建包含指定內容的新文件 */

//fs.writeFile() method