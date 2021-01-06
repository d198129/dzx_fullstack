// 方法一
var isPalindrome = function (x) {
  if(x<0){
       return false;
  } else if (x<10) {
      return true
  }else{
      let res = x  % 10, y = x,c = res
      while(y>=10){
          y = Math.floor((y - res) / 10);
          res = y % 10;
          c = c * 10 + res;
      }
      return x === c;
  }
};


// 方法二
var isPalindrome = function(x) {
  if(x<0){
       return false;
  } else if (x<10) {
      return true
  }else{
      let res = x  % 10, y = x,c = [res]
      while(y>=10){
          y = Math.floor((y - res) / 10);
          res = y % 10;
          c.push(res)
      }
      return x === c.join('') * 1;
  }
};


// 方法三
var isPalindrome = function(x) {
  let str = x.toString();
  if((str.split('').reverse().join('')) === str) {
      return true
  }else{
      return false
  }
};