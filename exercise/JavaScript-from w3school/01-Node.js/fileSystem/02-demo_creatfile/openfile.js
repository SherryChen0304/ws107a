var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

/*  takes a "flag" as the second argument,
    if the flag is "w" for "writing", the specified file is opened for writing. 
    If the file does not exist, an empty file is created 
    將“flag”作為第二個參數，如果標誌為“w”表示“寫入”，則打開指定的文件進行寫入。
    如果該文件不存在，則創建一個空文件*/
//open(path, flags, callback: (err, fd) 