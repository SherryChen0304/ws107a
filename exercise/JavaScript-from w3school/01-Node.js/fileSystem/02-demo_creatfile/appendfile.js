var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
//fs.appendFile() method
/* 將指定的內容附加到文件。如果文件不存在，將創建該文件 */

/* Create Files
    The File System module has methods for creating new files:
    fs.appendFile()
    fs.open()
    fs.writeFile() */