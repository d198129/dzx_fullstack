// function doSomething(a) {
//     b = a + doSomethingElse(a * 2)
//     console.log(b * 3);

//     function doSomethingElse(c) {
//         return c - 1;
//     }
// }

// var b;
// doSomething(2);


// var a = 2;

// (function() {
//     var a = 3
//     console.log(a);
// })()
// foo();
// console.log(a);

//块级作用域
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
//var a =1
// var a;变量提升 声明提升
// a = 1
// 用let定义就不会成为全局作用域

// console.log(a); //undefined
// var a = 2;
// let a = 2;报错
var foo = true
if (foo) {
    let a = 2;
}
console.log(a); //报错