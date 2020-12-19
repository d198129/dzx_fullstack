// let arr = [1, 2, 3, 1, '1', '1'];
// function unique(arr) {
//   let res = [];
//   let result;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         res.push(j);
//       }
//     }
//   }
//   for (let i = 0; i < res.length; i++){
//     arr.splice(res[i], 1);
//     if(i<res.length-1) res[i + 1] -= 1;
//   }
//   return arr;
// }

function unique(arr) {
  let res = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if(arr[i] === res[j]) {
        break;
      }
      console.log('j');
    }
    if (j === res.length) {
        res.push(arr[i])
    }
  }
  return res
}

console.log(unique(arr));