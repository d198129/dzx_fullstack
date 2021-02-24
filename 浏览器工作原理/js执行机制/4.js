// 作用域链

// function bar() {
//   console.log(Myname);
// }

// function foo() {
//   var Myname = '蜗牛';
//   bar();
// }

// var Myname = '周老板';

// foo();

// 词法作用域： 是根据代码的位置来决定的，不是看函数怎么调用的

// 要看结果是多少，就要看作用域链是怎么走的，要知道作用域链怎么走就要看词法作用域是怎么嵌套的

// 块级作用域中变量的查找

// function bar() {
//   var myName = '聪哥';
//   let test1 = 100;
//   if (1) {
//     let myName = '涛';
//     console.log(test);
//   }
// }

// function foo() {
//   var myName = '酒神';
//   let test = 2;
//   {
//     let test = 3;
//     bar();
//   }
// }

// var myName = '邓总';
// let myAge = 10;
// let test = 1;
// foo();


// 闭包 根据词法作用域的规则
// 内部函数总是可以访问到其外部函数中声明的变量的是毋庸置疑的
// 当通过调用一个外部函数返回的内部函数后，即使该外部函数已经执行结束了，这个外部函数的执行上下文已经在调用栈中出栈了但是内部函数引用外部函数的变量依然会保存在内存当中，闭包产物

function foo() {
  var myName = '甘总';
  let test1 = 1;
  let test2 = 2;
  var innerbar = {
    getName: function () {
      console.log(test1);
      return myName;
    },
    setName: function (newName) {
      myName = newName;
    }
  }

  return innerbar;
}

var bar = foo();
bar.setName('杨宝'); //
bar.getName(); // 1
console.log(bar.getName()); // 1 杨宝

function abc() {
  let test = foo();
}

// 闭包定义：在js中根据词法作用域的规则，内部函数总是可以访问外部函数中声明的变量的，当通过调用一个外部函数返回一个内部函数后，
// 即使外部函数已经执行结束，但是内部函数引用外部函数的变量依然保存在内存中，我们称这些变量为闭包的产物，这些变量的集合就称之为闭包

// 闭包是怎么回收的

// 1. 如果引用闭包的函数是一个全局变量，那么这个闭包就会一直存在直到页面关闭
// 2. 如果引用闭包的函数是一个局部变量，等函数销毁后，在下一次JavaScript引擎执行垃圾回收时，判断闭包不再使用了才会被垃圾回收机制回收
