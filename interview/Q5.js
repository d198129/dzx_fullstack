var name = 'World';

(function () {
  if (typeof name == 'undefined') {
    var name = 'Jack';
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})()

// 变量提升是js将声明移动至作用域的顶部

(function () {
  var name
  if (typeof name == 'undefined') {
    name = 'Jack';
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})()