let arr = [8, 7, 2, 4, 5, 3, 4, 1];

// [8, 7, 2, 4 | 5, 3, 4, 1];

// [8, 7, | 2, 4 | 5, 3, | 4, 1];

// [8, | 7, | 2, | 4, | 5, | 3, | 4, | 1];

function mergeSort(arr) {
  let len = arr.length;
  // 边界情况
  if (len <= 1) {
    return arr;
  }
  // 分割点
  const mid = Math.floor(len / 2);
  console.log(mid);
  // 递归分割左子数组
  const leftArr = mergeSort(arr.slice(0, mid));
  // 递归分割右子数组
  const rightArr = mergeSort(arr.slice(mid, len));

  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr);
  return arr;
}

function mergeArr(arr1, arr2) {
  let i = 0, j = 0;
  const res = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j])
      j++;
    }
  }
  // 处理其中一个子数组优先合并完全
  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}

console.log(mergeSort(arr));