let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'back',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  },
}

function copy(src) {
  if (typeof src !== 'object') return;
  let dest = {};
  // 实现拷贝代码，将src的值完全拷贝给dest
  for (let key in src) {
    if (src.hasOwnProperty(key)) {
      if (src[key] instanceof Object) {
        dest[key] = copy(src[key]);
      } else {
        dest[key] = src[key];
      }
    }
  }
  return dest;
}

let jack2 = copy(jack);
jack2.like.dog.color = 'green';
console.log(jack.like.dog.color); // black
console.log(jack);
console.log(jack2);