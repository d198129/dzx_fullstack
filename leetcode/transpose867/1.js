var transpose = function(A) {
    let B = [];
    for (let i in A) {
        for (let j in A[i]) {
            if (!B[j]) { B[j] = []; }
            B[j][i] = A[i][j];
        }
    }
    return B;
};