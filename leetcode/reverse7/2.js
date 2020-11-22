var reverse = function(num) {
    let result = 0;
    let x = Math.abs(num);
    while (x >= 10) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10)
    }
    result = result * 10 + x
    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) return 0
    if (num >= 0) return result;
    else return -result
};