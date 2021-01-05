//三数求和
// 给你一个包含 n 个整数的数组 nums
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
let nums = [-1, 0, 1, 2, -1, -4];
// [[-1, 0, 1], [-1, -1, 2]]
const threeSum = function (nums) {
  let res = [];
  const len = nums.length;
  nums = nums.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]
  for (let i = 0; i < len - 2; i++){
    let j = i + 1; let k = len - 1
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {//处理左指针重复的情况
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        //处理右指针
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++;
        while (j < k && nums[j] === nums[j - 1]) {//处理左指针重复的情况
          j++;
        }
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res
}