const movezeros3 = function(nums) {
    let i, k = 0,
        len = nums.length;
    //交换法
    for (i = 0; i < len; i++) {
        if (nums[i]) {
            if (k != i) {
                nums[k++] = nums[i];
                nums[i] = 0;
            } else {
                k++;
            }
        }
    }
    return nums;
};
console.log(movezeros3([1, 0, 0, 0, 0, 3, 4, 6, 0]));