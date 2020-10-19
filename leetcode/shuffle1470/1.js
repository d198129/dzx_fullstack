var shuffle = function(nums, n) {
    var num1 = [],
        i, j, k = 0;
    for (i = 0, j = n; i < n; i++, j++) {
        num1[k++] = nums[i];
        num1[k++] = nums[j];
    }
    return num1;
};