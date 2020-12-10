const fs = require('fs');
fs.readFile('./api.js','utf-8',(err,con) => {
  console.log(con);
})

let arr = [1, 2, 3];
arr.forEach((item) => {
  console.log(item);
})

function readFile(cb) {
  setTimeout(() => {
    cb('hello World');
  },2000)
}
readFile((c) => {
  console.log(c);//2s之内输出hello world
})

// parseInt('1100',2)//12 -> 把二进制的1100转换为十进制
// parseInt('1100',10)//1100 ->把十进制的1100转换为十进制

// const add1 = (x, a) => {
//   console.log(x);
//   console.log(a);
//   return x + 1;
// }
// arr.map(add1);//无参风格