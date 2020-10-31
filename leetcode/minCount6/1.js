var minCount = function(coins) {
    let i, count = 0,
        len = coins.length;
    for (i = 0; i < len; i++) {
        count = count + Math.ceil(coins[i] / 2)
    }
    return count
};