var kidsWithCandies = function(candies, extraCandies) {
    var max = 0,
        i, len = candies.length;
    var consult = [];
    for (i = 1; i < len; i++) {
        if (candies[i] > candies[max]) {
            max = i;
        }
    }
    for (i = 0; i < len; i++) {
        consult.push(candies[i] + extraCandies >= candies[max]);
    }
    return consult;
};
console.log(kidsWithCandies([3, 5, 1, 9, 4, 6], 4));