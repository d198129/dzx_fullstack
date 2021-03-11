// var a = 0;
// var b = async () => {
//   console.log('123');
//   a = a + await 10;
//   console.log(a);

//   a = a + await 10
//   console.log(a);
// }

// b()
// a++
// console.log(a);

function generator(cb) {
  return (function () {
    var object = {
      next: 0,
      stop: function () { }
    }
    return {
      next: function () {
        var ret = cb(object)
        if (ret === undefined) return { value: undefined, done: true }
        return {
          value: ret,
          done: false
        }
      }
    }
  })()
}


Function.prototype.mycall = function (thisArg) {
  if (typeof this !== 'function') {
    return new TypeError('error');
  }
  const fn = Symbol('fn');
  const arg = [...arguments].slice(1);
  let thisArg = thisArg || window;
  thisArg[fn] = this;
  const result = thisArg[fn](...arg);
  delete thisArg[fn];
  return result;
}

Function.prototype.myapply = function (thisArg, args) {
  if (typeof this !== 'function') {
    return new TypeError('error;')
  }
  const fn = Symbol('fn');
  let thisArg = thisArg || window;
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn]
  return result
}

Function.prototype.mybind = function (thisArg) {
  if (typeof this !== 'function') {
    return new TypeError('error;')
  }
  const args = [...arguments].slice(1);
  const _this = this || window;
  let foo = function () { };
  const bound = function () {
    return _this.apply(thisArg, args.length ? args : arguments)
  }
  if (this.prototype) {
    foo.prototype = this.prototype;
  }
  bound.prototype = new foo();
  return bound;
}

function mynew() {
  let _this = {};
  // let args = [...arguments].slice(1);
  let obj = Array.prototype.shift.call(arguments);
  _this.__proto__ = obj.prototype;
  let res = obj.apply(_this, arguments);
  return typeof res === 'object' ? res : _this;
}