// function identify() {
//     return this.name.toUpperCase();
// }

// function speak() {
//     var greeting = "Hello I am" + identify.call(this)
//     console.log(greeting);
// }
// var me = {
//     name: 'wn'
// }
// var you = {
//     name: 'gg'
// }
// speak()

// function fo() {
//     let person = {
//         name: 'wn',
//         age: '18'
//     }
//     console.log(this);
// }

// function bar() {
//     let person = {
//         name: '蜗牛',
//         age: '20'
//     }
//     fo()
// }
// bar()

// function foo() {
//     console.log(this.a);
// }
// var a = 2
//     (function () {
//         foo()
//     })()

//隐式绑定
// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a: 2,
//     obj2: obj2 //引用
// }
// var obj2 = {
//     a: 3,
//     foo: foo
// }
// obj2.foo()

//隐式丢失
function foo() {
    console.log(this.a);
}
var obj = {
    a: 3,
    foo: foo
}
var b = obj.foo
var a = 'hello'
bar()