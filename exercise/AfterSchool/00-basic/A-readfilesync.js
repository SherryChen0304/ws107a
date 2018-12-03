var fs = require('fs'); // 引用檔案物件
var data = fs.readFileSync(process.argv[2], "utf8"); // 讀取檔案 慢 好懂
console.log('data=', data); // 顯示在螢幕上

/* readFileSync(path, options); 
readFileSync(path: PathLike | number, options: { encoding: string; flag?: string; } | string): string; */