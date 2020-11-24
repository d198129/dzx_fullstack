let b = {
    name: '邓总'
}

function a(e, r) {
    console.log(e + r);
    console.log(this.name);
}
// Function.prototype.myapply = function(thisArg) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error')
//     }
//     // 让this代表的这个函数 去到thisArg里面生效
//     const fn = Symbol('fn'); //防止fn这个单词被占用
//     //把this代表的这个函数所拥有的参数先取到
//     const args = [...arguments].slice(1)[0] //['b','1','2']
//     thisArg = thisArg || window;
//     //将调用call函数的方法添加到thisArg的属性中
//     console.log(this);
//     thisArg[fn] = this;
//     const result = thisArg[fn](...args);
//     delete thisArg[fn];
//     return result
// }
Function.prototype.myapply = function(obj, arg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const fn = Symbol('fn');
    obj[fn] = this;
    const res = obj[fn](...arg);
    delete obj[fn];
    return res;
}
a.myapply(b, [2, 3])