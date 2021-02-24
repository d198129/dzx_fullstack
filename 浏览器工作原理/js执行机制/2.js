// 栈溢出

// 1. 当JavaScript执行全局代码的时候，一定会编译全局代码并创建全局执行上下文，并且全局执行上下文只有一份
// 2. 当一个函数被调用，函数体内代码会被编译，创建函数执行上下文，函数执行之后创建的函数执行上下文会被销毁
// 3. 当使用eval函数的时候，eval的代码会被编译，并创建执行上下文

// var num = 1;
// while (num < 10) {
//   num--;
// }

// 用来管理 函数调用 关系的一种数据结构
var a = 2;
function add(b, c) {
  return b + c;
}

function addAll(b, c) {
  var d = 10;
  result = add(b, c);
  return a + result + d;
}

addAll(3, 6);
// 调用栈
// 调用栈是有大小的，超出了一定的执行上下文数量会栈溢出