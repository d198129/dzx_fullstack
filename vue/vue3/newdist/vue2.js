// vue2.0 是如何实现响应式的
// 数据改变了，视图就会更新

//重写数组方法 push,shift,unshift,pop,reserve
let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype)
[push, shift, unshift, pop, reserve].forEach(method => {
  //函数劫持，重写函数
  proto[method] = function () {
    updateView();
    oldArrayPrototype[method].call(this,...arguments);
  }
})

function updateView() {
  console.log('更新视图');
}

function defineReactive(target, key, value) {
  // if (typeof value == 'object' && value !== null) {
  //   observer(value)
  // }
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        updateView();
        value = newVal;
      }
    }
  })
}

function observer(target){// 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }
  if (Array.isArray(target)) {
    Object.setPrototypeOf(target, proto)
    // target.__proto__ == proto
  }
  for (let key in target) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      observer(target[key]);
      continue;
    }
    defineReactive(target, key, target[key]);
  }
}

let data = { name: 'wn' };
observer(data)
data.name = 'cg'

//Object.defineProperty
let data = {
  name: 'wn',
  age: {
    n: 18
  },
  like: {
    a: {
      hb: 'eat'
    }
  },
  sex: 'boy',
  job: ['coder', 'driver']
}
observer(data)
// console.log(data.like.a.hb);
// data.name = 'cg'
// data.like.a.hb = 'running'
// console.log(data.like.a.hb);

data.job.push('teacher')
console.log(data.job);