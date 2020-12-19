let shallowCopy = function (obj) {
  //只拷贝对象
  if (typeof obj !== 'object') return;
  //根据obj的类型判断是新建一个数组还是一个对象
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// let test = ['a', 'b', 'b'];
// for (let key in test) {
//   console.log(test.hasOwnProperty(key));
// }

let a = { a: 1, b: 2, c: 3 };
let b = shallowCopy(a);
b.a = 2;
console.log(a);
console.log(b);