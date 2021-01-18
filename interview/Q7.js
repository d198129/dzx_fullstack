var arr = [0, 1, 2];
arr[10] = 10;

arr.filter(function (x) {
  return x === undefined;
})

// calback 只会在已经赋值的索引上调用，对于那些已经被删除或者从未被赋值的索引不会被调用

//  []