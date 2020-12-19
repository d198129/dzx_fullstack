let arr = [1, 2, 3, 2, 0, 5];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// Math.min() > Math.max(); // true
let maxfun = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(maxfun([2, 5, 6, 8, 23, 43, 23, 26]));

//reduce
let max1 = function (pre,next) {
  return Math.max(pre, next);
}
console.log(arr.reduce(max1));


//欺骗词法作用域
let max = eval("Math.max(" + arr + ")");
Math.max.apply(null, arr);
