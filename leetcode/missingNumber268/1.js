var missingNumber = function(nums) {
    let n = nums.length;
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i <= n; i++) {
        sum1 += i;
        sum2 += (nums[i] || 0);
    }
    return sum1 - sum2;
};