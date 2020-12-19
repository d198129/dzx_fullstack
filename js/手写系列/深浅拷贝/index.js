// let arr = ['old', 1, true, null, undefined];
// let new_arr = arr.concat();
// console.log(new_arr);

//concat 对于原始值是深拷贝，引用类型是浅拷贝
//slice 也是浅拷贝


// let arr = [{ old: old }, 1, true, null, undefined];
// let arr1 = JSON.parse(JSON.stringify(arr));
// arr[0].old = 'new';
// console.log(arr1);

// 深拷贝 但是识别不出 undefined，识别不了函数


let a = [{a:1}, 2, 3, 4];
let b = [...a];
b[0].a = 3;
console.log(a);
console.log(b);