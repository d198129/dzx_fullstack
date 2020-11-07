var numJewelsInStones = function(J, S) {
    let i, j, count = 0;
    for (i = 0; i < J.length; i++) {
        for (j = 0; j < S.length; j++) {
            if (J[i] === S[j]) count++
        }
    }
    return count
};