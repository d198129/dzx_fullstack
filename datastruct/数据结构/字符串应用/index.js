//字符串反转
let str = 'maosen';
str.split('').reverse().join('');

let str = 'yessey'
function isPalindrome(str) {
  // 1
  // const res = str.split('').reverse().join('');
  // return res === str;

  // 2
  // let len = parseInt(str.length / 2)
  // for (let i = 0, j = str.length - 1; i < len;){
  //   if (str[i] === str[j]) { // if(str[i] !== str[str.length - 1 -i])
  //     i++;
  //     j--;
  //   } else {
  //     return false;
  //  }
  // }
  // return true;
}


// 给定一个非空字符串s，最多删一个字符。判断是否能成为回文字符串

function valiPalindrome(str) {
  let flag = isPalindrome(str);
  if (!flag) {
    let i = 0, len = str.length;
    while (i < len && !flag) {
      let arrStr = str.split('')
      arrStr.splice(i, 1);
      i++;
      let res = arrStr.join('');
      flag = isPalindrome(res)
    }
  }
  return flag;
}

var validPalindrome = function (str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}
