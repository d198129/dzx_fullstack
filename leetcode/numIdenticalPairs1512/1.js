const numIdenticalPairs = function(nums) {
    let i, j, count = 0,
        len = nums.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    return count;
};
console.log(numIdenticalPairs([1, 0, 0, 1, 0, 1, 1]));