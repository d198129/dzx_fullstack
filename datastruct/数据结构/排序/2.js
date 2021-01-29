// 选择排序
// 思想：循环遍历数组，每次找到当前范围内的最小值，把它放在当前范围的头部，然后缩小范围，直至数组完全有序为止

let arr = [5, 0, 3, 2, 4, 1];

function selectSort(nums) {
  const len = nums.length;
  // minIndex 用来缓存区间内最小值的索引
  let minIndex;
  for (let i = 0; i < len - 1; i++){
    minIndex = i;
    // i是区间的左界，j是区间右界
    for (let j = i; j < len; j++){
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    console.log(minIndex);
    // 如果minIndex对应的元素不是目前数组的头元素，就交换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectSort(arr));