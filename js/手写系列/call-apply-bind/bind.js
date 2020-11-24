let b = {
    name: '邓总'
}

function a(e, r) {
    console.log(e + r);
    console.log(this.name);
}
Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const args = [...arguments].slice(1) //[4,5]
    const self = this;
    const nop = function() {};
    // const fn = Array.prototype.shift.call(arguments);
    //绑定函数
    const bound = function() {
        return self.apply(this instanceof nop ? this : thisArg, args);
    }
    if (this.prototype) {
        nop.prototype = this.prototype;
    }
    bound.prototype = new nop()
    return bound;
}