// Person.prototype.lastName = 'Liu'

// function Person(name) {
//     this.name = name
// }
// var person = new Person('zhipeng')
// person.lastName = 'wang' //没有改动原型属性，只是在自己的对象中增加一个属性
// console.log(person.lastName);
// function Bus() {

// }

// Car.prototype = {
//     constructor: Bus
// }

function Car() {

}
var car = new Car()
console.log(Car.prototype);
//constructor 指向的是Car，目的是让Car()构造出来的对象想要找到自己的来历
//Car.constructor