const twoSum = function(nums, target) {
    class h {}
    for (let i = 0; i < nums.length; i++) {
        if (h[nums[i]] !== undefined) {
            return [h[nums[i]], i];
        } else {
            h[target - nums[i]] = i;
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));