function sub_curry(fn) {
  let args = [].slice.call(arguments, 1);
  return function () {
    let newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this,newArgs)
  }
}

function curry(fn, length) {
  length = length || fn.length;
  return function () {
    if (arguments.length < length) {
      let combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this,combined),length - arguments.length)
    } else {
      return fn.apply(this,arguments);
    }
  }
}
//fn('a','b','c');
//fn('a')('b')('c');
// let test = curry(function(a, b, c) {
//   return [a, b, c]
// })
// console.log(test('a', 'b', 'c'));
// console.log(test('a')('b')('c'));
// console.log(test('a', 'b')('c'));


function curry(fn) {
  let args = [].slice.call(arguments, 1);
  return function () {
    let newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this,newArgs);
  }
}

function add(a, b) {
  return a + b;
}

let addCurry = curry(add, 1, 2);
console.log(addCurry());