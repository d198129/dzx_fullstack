function foo() { };
var oldName = foo.name;
foo.name = 'bar'; // 函数名是禁止修改的


[oldName, foo.name];
// console.log(oldName);