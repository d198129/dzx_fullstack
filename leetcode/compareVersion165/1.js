var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.'),
        arr2 = version2.split('.');
    let len = Math.max(arr1.length, arr2.length);
    for (i = 0; i < len; i++) {
        let a = arr1[i] ? arr1[i] : 0;
        let b = arr2[i] ? arr2[i] : 0;
        a = Number(a);
        b = Number(b);
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
    }
    return 0;
};