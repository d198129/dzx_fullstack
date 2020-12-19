let arr = [1, 2, 3, 1, '1', '1'];
function unique1(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++){
    if(res.indexOf(arr[i]) === -1){
      res.push(arr[i])
    }
  }
  return res
}

function unique2(arr) {
  let res = [];
  let sorteArr = arr.sort();
  let seen;
  for (let i = 0; i < sorteArr.length; i++){
    //如果是第一个元素或者相邻的元素不相同
    if (!i || seen !==sorteArr[i]) res.push(sorteArr[i]);
    seen = sorteArr[i];
  }
}
// console.log(unique(arr));