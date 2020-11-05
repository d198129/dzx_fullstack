var num = 123 //var num = new Number(123).toString()
    //Number.prototype.__proto__ = Object.prototype
num.toString() //'123'

//方法重写
Object.prototype.toString = function() {}
Person.prototype.toString = function() {
    return 'hehe'
}

function Person() {

}
var person = new Person()