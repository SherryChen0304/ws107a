var fs = require('fs'); // 引用檔案物件
fs.readFile(process.argv[2], "utf8", function (err, data) {
  console.log("data=" + data);
});
console.log("----readFile End-----"); // 顯示在螢幕上 快 不好懂

/* function 
readFile(path, options, callback:(err, data)) 
    readFile(path: PathLike | number, options: { encoding: string; flag?: string; } | string, callback: (err: NodeJS.ErrnoException, data: string) */