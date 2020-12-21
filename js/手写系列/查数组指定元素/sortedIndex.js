// function sortedIndex(array,obj) {
//   let low = 0, high = array.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (array[mid] < obj) low = mid + 1;
//     else high = mid -1;
//   }
//   return low;
// }

function sortedIndex(array,obj,iteratee,context) {
  let low = 0, high = array.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] < obj) low = mid + 1;
    else high = mid;
  }
  return high;
}

function cb(func, context) {
  if (context === undefined) return func;
  return function () {
    return func.apply(context,arguments)
  }
}

console.log(sortedIndex([10, 20, 30], 25)); //2