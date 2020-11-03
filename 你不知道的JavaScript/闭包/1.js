function test() {
    var arr = []
    for (var i = o; i < 10; i++) {
        arr[i] = function() {
            console.log(i);
        }
    }
    return arr
}
var myarr = test()