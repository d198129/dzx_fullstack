// console.log('start require');
// console.log(require('./lib'));
// console.log('end require');
let lib = require('./lib')
console.log(lib);
lib.name = '蜗牛'
    //export导出的引用与index里lib是同一个玩意儿