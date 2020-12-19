let array1 = [1, 2, '1', 2, 1]
let array2 = [1, 1, '1', 2, 2, 'a', 'b', 'A']


// function unique(array, isSorted) {
//   let res = [];
//   let seen;

//   for (let i = 0, len = array.length; i < len; i++) {
//     let value = array[i]
//     if (isSorted) {
//       if (!i || seen !== value) {
//         res.push(value)
//       }
//       seen = value
//     } else if (res.indexOf(value) === -1) {
//       res.push(value)
//     }
//   }
//   return res
// }


function unique(array, isSortted, iteratee) {
  for (let i = 0, len = array.length; i < len; i++){
    let res = [];
    let seen;
    let value = array[i];
    let computed = iteratee ? iteratee(value) : value;
    if (isSortted) {
      if (!i || seen !== computed) {
        res.push(value);
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(value);
      }
    }else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}
console.log(unique([1, 2, 3, 1, 3], true, function (item) {
  return typeof item == 'string' ? item.toLowerCase() : item 
}));