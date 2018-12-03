var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

/* 將指定的內容附加到指定文件的末尾 */
//fs.appendFile() method