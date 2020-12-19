let deepCopy = function (obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] instanceof Object) { //newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[k];
        newObj[key] = deepCopy(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

let a = { a: 1, b: 2, c: 3 };
let b = deepCopy(a);
b.a = 2;
console.log(a);
console.log(b);