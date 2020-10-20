var Person = function() {}
Person.prototype.type = 'object named Person'
var person = new Person()
    //检查person是不是Person的实例
console.log(person instanceof Person);
//实例跟构造函数的关系
console.log(person.__proto__ == Person.prototype);
// 实例继承构造函数的原型的属性
console.log(person.type);
//原型怎么访问到构造函数
console.log(Person.prototype.constructor === Person);
//实例访问构造函数
console.log(person.__proto__.constructor === Person);

// 原型链
var People = function() {}
People.prototype = new Person(); //相当于Person.prototype = Person{}
var p = new People();
console.log(p.type);
console.log(p.__proto__); //People.prototype == Person.prototype
console.log(p.__proto__.__proto__);
console.log(p.__proto__.__proto__.__proto__);
console.log(p.__proto__.__proto__.__proto__.__proto__);