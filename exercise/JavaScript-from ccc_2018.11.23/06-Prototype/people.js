/* javascript的物件導向，採用了原型 (prototype) 這種物件導向的實作方式，這種方式很有彈性。 */
var People = {
    name: "Sherry",
    age: 20,
    print: function () {
        console.log("name=", this.name, "age=", this.age);
    }
}
People.print();