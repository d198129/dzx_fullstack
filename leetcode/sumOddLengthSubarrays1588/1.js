var sumOddLengthSubarrays = function(arr) {
    let i, j, k, len = arr.length,
        sum = 0;
    for (i = 1; i <= len; i = i + 2) {
        for (j = 0; j < len; j++) {
            if (arr[j + i - 1] != null) {
                for (k = 0; k < i; k++) {
                    sum = sum + arr[j + k]
                }
            }
        }
    }
    return sum;
};