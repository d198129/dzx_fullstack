// 双端队列 就是允许在队列的两端进行插入和删除的队列

// 即允许使用pop、push同时又允许使用shift、unshift的数组

// const queue = [1, 2, 3, 4];
// queue.push(1); // 双端队列尾部入队
// queue.pop(); // 双端队列尾部出队
// queue.shift(); // 双端队列头部出队
// queue.unshift(); // 双端队列头部入队

// 题目： 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。


// 双指针 + 遍历
var maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  const res = [];
  let left = 0;
  let right = k - 1;

  if (!nums || !nums.length) return nums;

  while (right < len) {
    // 计算左右指针内的最大值
    const max = calMax(nums, left, right);
    res.push(max);
    left++;
    right++
  }
  return res;
};

function calMax(arr, left, right) {
  let maxNum = arr[left];
  for (let i = left; i <= right; i++){
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum;
}

// 双端队列法：有效的递减队列
// 在窗口发生移动的时候， 只根据发生变化的元素对最大值更新

var maxSlidingWindow2 = function (nums, k) {
  const len = nums.length;
  const res = [];
  // 初始化双端队列
  const deque = [];
  for (let i = 0; i < len; i++){
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i);
    // 当对头的元素索引已经出现在滑动窗口之外
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
}