// 题解一：

var containsDuplicate = function(nums) {
  let arr = new Set()
  for(let i of nums){
      arr.add(i);
  }
  let newarr = Array.from(arr.values());
  if(newarr.length < nums.length) {
      return true
  }else{
      return false;
  }
};


// 题解二
var containsDuplicate = function(nums) {
  let len = nums.length;
  for(let i = 0;i<len-1;i++){
      for(let j = i + 1;j<len;j++){
          if(nums[i] === nums[j]){
              return true;
          }
      }
  }
  return false;
};