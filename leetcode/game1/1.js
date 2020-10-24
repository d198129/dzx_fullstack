var game = function(guess, answer) {
    var i, count = 0;
    for (i = 0; i < guess.length; i++) {
        if (guess[i] == answer[i]) { count++; }
    }
    return count;
};