let array = [1, 2, 1, 1, '1'];
function unique() {
  // let res = arr.concat().sort().filter(function (itme, index, arr)
  let res = arr.filter(function (itme, index, arr) {
    // return arr.indexOf(itme) === index;
    return !index || itme !== arr[index - 1];
  })
  return res;
}


// es6
function unique2(arr) {
  return Array.from(new Set(arr));
  // return [...new Set(arr)]
}
// let unique3 = (arr) => [...new Set(arr)]