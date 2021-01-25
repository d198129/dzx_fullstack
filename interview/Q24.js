var a = {};
var b = Object.prototype;
[a.prototype === b,Object.getPrototypeOf(a) == b]

// [false, true]

// 对象是没有prototype属性的


function f() { };
var a = f.prototype; // {}
var b = Object.getPrototypeOf(f); // Function.prototype
a === b; // false


// function Person() { };
// var p = new Person();

// var a = p.__proto__;
// var b = Object.getPrototypeOf(p);
// var c = Person.prototype;
// Object.getPrototypeOf(p) == Person.prototype;
// Object.getPrototypeOf(Person) == Function.prototype;
// console.log(a === b); // true