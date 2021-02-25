function foo() {
  var a = 1;
  var b = a;
  a = 2;
  console.log(a); // 2
  console.log(b); // 1
}

foo();

function foo2() {
  var a = { name: '杨宝' };
  var b = a;
  a.name = '小邓';
  console.log(a); // { name: '小邓'}
  console.log(b); // { name: '小邓'}
}
foo2();

// var a = 1;
// a = true;

var bar;
console.log(typeof bar);
bar = 12;
console.log(typeof bar);
bar = 'hello';
console.log(typeof bar);
bar = true;
console.log(typeof bar);
bar = null;
console.log(typeof bar);
bar = { name: '小邓' };
console.log(typeof bar);

/* function foo() {
  var a = '杨宝',
  var b = a;
  var c = { name: '杨宝' };
  var d = c;
}
foo(); */




// 再谈闭包