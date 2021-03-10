// 求取数组中最大连续升序子序列的和
A = [1, 3, -2, 4, -5]  
// B = [1, -2, 3, 5, -3, 2]

// A = [1, 3, -2, 4, -5]; [1,3,-2,4] 6
// B = [1, -2, 3, 5, -1, 2] [ 3,5,-1,2] 9


// 1. 元素的下标是连续的
// 2. 只要是求和的，不需要返回元素的位置
// 2. 元素都是整数，可能为正数也可能是负数
// 4. 子序列的最小长度为1

// 暴力解决法

var maxSubArrray = function (nums) {
  let max = 0;
  let sum = 0
  const len = nums.length;
  for (let i = 0; i < len; i++) { // i = 0
    sum = 0
    for (let j = i; j < len; j++) { // j = 0 1 2 3 4 5
      sum += nums[j];
      max = Math.max(max, sum)
    }
  }
  return max;
}

// console.log(maxSubArrray(A));


// 分治
var nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var helper = function (list, m, n) {
  if (m === n) return list[n];
  let sum = 0;
  let lmax = -Infinity;
  let rmax = -Infinity;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid)
  const r = helper(list, mid + 1, n)

  // 如果最大值出现在左数组
  for (let i = mid; i >= m; i--) { // 2 1 -3 4
    sum += list[i]
    if (sum > lmax) {
      lmax = sum
    }
  }

  sum = 0;

  // 如果最大值出现在右数组
  for (let i = mid + 1; i <= n; i++) { // -1 2 1 -5 -4
    sum += list[i]
    if (sum > rmax) {
      rmax = sum
    }
  }

  return Math.max(l, r, lmax + rmax)
}

var maxSubArray2 = function (nums) {
  return helper(nums, 0, nums.length - 1)
};

console.log(maxSubArray2(nums2));