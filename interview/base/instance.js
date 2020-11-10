// let arr = []
// arr instanceof Array
function instance_of(L, R) {
    L = L.__proto__
    let o = R.prototype
    while (true) {
        if (L === null) return false
        if (o === L) return true
        L = L.__proto__ //Array.prototype.__proto__ ==Object.prototype
    }
}
instance_of(arr, Array)