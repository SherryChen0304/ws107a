/* 單層結構 */
var d = { dog: "狗", cat: "貓", a: "一隻", chase: "追", eat: "吃" };
console.log("dictonary:", d);
console.log("search for dog: " + d.dog);
console.log("search for eat: " + d.eat);

console.log("search for dog: " + d["dog"]);
console.log("search for dog: " + d["狗"]);

console.log("search for x: " + d.x);
console.log("search for snoopy: " + d.snoopy);

/* 多層結構 */
var t = { dog: { name: "Snoopy", age: 3 }, cat: { name: "Garfield", age: 5 } };
console.log("dictonary:", t);

console.log("search for dog:", t.dog);
console.log("search for cat:", t.cat);

console.log("search for dog's age:", t.dog.age);
console.log("search for cat's name:", t.cat.name);
console.log("search for cat's telephone:", t.cat.tel);

/* 新增 t.man 這個欄位 */
t.girl = { name: "sherry", friends: [t.dog, t.cat] }
console.log("girl's introsuction:", t.girl);
console.log("all of t:", t);
console.log("girl's friend about dog:", t.girl.friends[0]);
console.log("girl's friend about cat:", t.girl.friends[1]);
console.log("girl's friend about bird:", t.girl.friends[2]);