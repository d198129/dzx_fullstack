const runningSum = function(nums) {
    let i = 0,
        len = nums.length;
    for (i = 1; i < len; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}
console.log(runningSum([1, 2, 3, 4, 5, 6, 7, 8]));