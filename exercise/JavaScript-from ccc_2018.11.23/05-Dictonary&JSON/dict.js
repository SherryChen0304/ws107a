/* 資料結構：
    其中最重要的一個就是字典 (dictonary)，字典中的基本元素是 (key, value) 的配對，
    我們只要將 key 傳入就可以取得 value 的値。*/
var dict = { name: "sherry", age: 20 };

dict["email"] = "dearsherrychen@gmail.com";
dict.birthday = "1998.03.04";

for (var key in dict) {
    console.log("key=", key, " value=", dict[key]);
}

console.log("age=", dict.age);
console.log("telephone=", dict["tel"]);