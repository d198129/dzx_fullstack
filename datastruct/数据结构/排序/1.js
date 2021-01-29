// 冒泡排序
// 思想：从低镉元素开始，重复比较相邻的两项，若第一项比第二项大，则交换两者的位置，反之则不动


let arr = [5, 3, 2, 4, 1]
function sort(nums) {
  let temp = null;
  for (let i = 0; i < nums.length - 1; i++){
    let flag = false;
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        flag = true;
      }
    }
    if (flag == false) return arr;
  }
  return nums;
}

console.log(sort([3, 2, 4, 1, 7, 5]));