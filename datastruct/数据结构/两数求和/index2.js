//双指针法20
//合并两个有序的正数数组 nums1和nums2 ，合并后还是正序
let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
//[1,2,2,3,5,6]
// 1. 定义两个指针，分别指向两个数组生效的部分的尾部
// 2. 每次只对指针所指的元素进行比较，取其中较大的元素，把它从num1的末尾往前填补

const merge = function (num1, m, num2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      num1[k] = num1[i];
      i--;
      k--;
    } else {
      num1[k] = num2[j];
      j--;
      k--;
    }
  }
  // nums2有剩余
  while (j >= 0) {
    num1[k] = num2[j];
    k--;
    j--;
  }
}