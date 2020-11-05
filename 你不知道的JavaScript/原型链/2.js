var obj = {

}
var obj = Object()
    //obj1.__proto__ = Object.prototype
Object.create(原型)
var obj = {
    name = '蜗牛',
    age: 18
}
var obj1 = Object.create(obj)
    //obj1.__proto__ = ?

//网易面试题
//所有的对象都会继承自Object.prototype ? 改为绝大多数
//不是的，特例：var obj = Object.create(null)  obj.__proto__ = {name:'wn'}