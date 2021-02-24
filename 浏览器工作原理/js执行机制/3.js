// var 缺陷以及为什么要引入let和const

// 作用域
// 作用域就是变量和函数的可访问范围

function foo() {
  for (var i; i < 7; i++){

  }
  console.log(i);
}

foo();

function foo() {
  var a = 1;
  var b = 2;
  {
    let b = 3;
    var c = 4;
    let d = 5;
    console.log(a);
    console.log(b);
  }
  console.log(b);
  console.log(c);
  // console.log(d);
}