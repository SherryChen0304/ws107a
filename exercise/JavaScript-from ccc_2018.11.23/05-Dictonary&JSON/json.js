/* JSON （Javascript Object Notation）常被用在網頁程式的資料交換當中。*/
var sherry = {
    "name": "Sherry",
    "age": 20,
    "friends": [
        { "name": "John", "age": 22 },
        { "name": "Mary", "age": 28 }
    ]
};
console.log("sherry.age=" + sherry.age);

console.log("sherry.friends:");

var friends = sherry.friends;

for (i in friends) console.log("    " + friends[i].name + " is " + friends[i].age + " years old!");