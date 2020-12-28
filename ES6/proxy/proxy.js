//------------------------demo1
// let proxy = new Proxy({}, {
//   get: function (obj, prop) {
//     console.log('get操作');
//     return obj[prop];
//   },
//   set: function (obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value;
//   }
// });
// proxy.time = 35;
// console.log(proxy.time);

//------------------------demo2

// let handler = {
//   has(target, key) {
//     if (key[0] === '_') {
//       return false;
//     }
//     return key in target;
//   }
// }
// let target = { _prop: 'foo', prop: 'bar' }//业内默认加了_的是私有属性
// let proxy = new Proxy(target,handle);
// console.log('_prop' in proxy);

//-------------------deme3
let target = function () {
  return 'T am the target'
}
let handler = {
  apply: function () {
    return 'I am the Proxy'
  }
}

let p = new Proxy(target, handle);
console.log(p());

//----------------------------demo4
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}
let handler = {
  ownKeys(target) {
    return Reflect.ownKeys.target.filter(key => key[0] !== '_');
  }
}
let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}