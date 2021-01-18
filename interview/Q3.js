[[3, 2, 1].reduce(Math.pow, [].reduce(Math.pow))] // 该数组展示结果

let arr = [3, 2, 1];
let pow = function (a, b) {
  console.log(a, b);
  return a ** b;
}

arr.reduce(pow); // 3,2  9,1