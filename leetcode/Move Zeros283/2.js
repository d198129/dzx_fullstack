const movezeros2 = function(nums) {
    // let nonzeros = new Array();
    let i, k = 0,
        len = nums.length;
    //将nums中非0元素放入下标为[0~k]中
    for (i = 0; i < len; i++) {
        if (nums[i]) {
            nums[k++] = nums[i];
        }
    }
    for (i = k; i < len; i++) {
        nums[i] = 0;
    }
    return nums;
};
console.log(movezeros2([1, 0, 2, 0, 8, 6, 0, 3, 0, 3, 8, 0]))