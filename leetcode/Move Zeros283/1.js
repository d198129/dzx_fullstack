const movezeros = function(nums) {
    let nonzeros = new Array();
    let i, len = nums.length;
    //将nums中非0元素放入nonzeros中
    for (i = 0; i < len; i++) {
        if (nums[i])
            nonzeros.push(nums[i]);
    }
    //将nonzeros中所有的元素依次放入到nums开始的地方
    for (i = 0; i < nonzeros.length; i++) {
        nums[i] = nonzeros[i];
    }
    for (i = nonzeros.length; i < len; i++) {
        nums[i] = 0;
    }
    return nums;
};
console.log(movezeros([1, 0, 0, 8, 6, 0, 3, 0, 3]));