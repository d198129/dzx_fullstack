let arr = [1, [2, [3, 4]]];
// function faltten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] instanceof Array) {
//       result = result.concat(faltten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

console.log(faltten(arr));

// console.log(arr.toString());

//reduce
function faltten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? faltten(next) : next)
  },[])
}


let arr = [1, [2, [3, 4]]];
function faltten2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}