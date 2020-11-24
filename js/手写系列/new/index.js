// Person.prototype.say = function() {
//     console.log('hahaha');
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// let person = new Person();
// console.log(person);
function myNew() {
    let obj = {};
    //去到外面的构造器
    // arguments
    console.log(arguments);
    let Constructor = Array.prototype.shift.call(arguments);
    console.log(Constructor);
    obj.__proto__ = Constructor.prototype;
    let result = Constructor.apply(obj, arguments)
    return typeof result === 'object' ? result : obj;
}
let person = myNew(Person, '小敏');
console.log(person);