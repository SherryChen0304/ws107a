/* 在 javascript 當中，「物件」是整個系統的核心結構，javascript的物件用大括號表示。 */

//所以我們可以用下列語法建立一個名為 person 的空物件,然後放一些欄位(age)進去。
var person = {};
person.name = "sherry";
person.email = "dearsherrychen@gmail.com";
console.log("introsuction:", person);
p = person;
p.age = 20;
console.log("  After adding the feild of age:", p);

//更簡潔的方式表達上述的物件 
var isperson = { name: "sherry", email: "dearsherrychen@gmail.com" };
console.log("introsuction:", isperson);