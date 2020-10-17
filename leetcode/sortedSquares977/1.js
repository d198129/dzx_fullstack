var sortedSquares = function(A) {
    var i, j, temp, len = A.length;
    for (i = 0; i < len; i++) {
        A[i] = A[i] * A[i];
    }
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (A[i] > A[j]) {
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
    return A;
};