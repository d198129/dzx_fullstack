let arr = [1, 2, ,null, 3, undefined];

// 1. arr的长度 ？ 4；
// 2. 怎么去除arr的空项

// console.log(arr.filter(item => item !== ''));
// arr.filter(() => true);
[1, 2, , 3];
// 3. arr2 = arr2.map(parseInt) arr2 = ? [1, NAN, NAN]

// parseInt(val, index, arr);

// 4. arr 和 arr2 合并成arr3 的结果？[1, 2, undefined, 3, 1, NaN, NaN]
// let arr2 = [1, NaN, NaN]; arr = [1,2,undefined,3]


// 5. 去除arr3中的重复内容
// [...new Set(arr3)];
let res = Array.from(new Set(arr3));