//[{age:18},{age:19},{age:10}]
function partition(arr, left, right) {
    if (left >= right) return;
    let privt = arr[0];
    let i = left,
        j = right;
    while (i < j) {
        //在右边找到 <privt
        while (arr[j] >= privt && i < j) { j--; }
        arr[i] = arr[j];
        //在左边找到>privt
        while (arr[i] <= privt && i < j) { i++ }
        arr[j] = arr[i];
    }
    arr[i] = privt
    partition(arr, left, i - 1)
    partition(arr, i + 1, right)
}

function sort(arr) {
    partition(arr, 0, arr.length - 1)
}