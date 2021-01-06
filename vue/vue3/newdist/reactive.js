// vue3.0的响应式原理
// vue2.0默认递归，数组改变length属性是无效的，对象不存在的属性是不能被拦截的

let toProxy = new WeakMap(); // 原对象：代理过的对象
let toRow = new WeakSet(); // 代理过的对象：源对象

function reactive(target) {
  //创建响应式的对象
  return createReactiveObject(target);
}
function createReactiveObject(target) {
  if (isObject(target)) {// 如果不是对象，那就直接返回
    return target;
  }
  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy;
  }
  let baseHandle = {
    get(target,key,receive) {
      console.log('获取');
      let result = Reflect.get(target, key, receive);
      // return isObject(result) ? reactive(result) : result; 递归多层代理
      return target[key];//return resuly
    },
    set(target, key, value, receive) {
      let hadkey = target.hasOwnproperty(key)
      let oldVal = target[key]
      if (!hadkey) {
        console.log('新增');
      } else if (oldVal !== value) {
        console.log('修改');
      }
      console.log('设置');
      Reflect.set(target, key, value, receive);
    },
    deleteProperty(target,key) {
      console.log('删除');
      let res = Reflect.deleteProperty(target, key)
      return res;
    }
  }
  let observed = new Proxy(target, baseHandle)
  toProxy.set(target,observed)
  toRow.add(observed,target)
  return observed;
}
function isObject(val) {
  return typeof val === 'object' && val !== null;
}

let proxy = reactive({
  name: 'wn',
  age: {
    n: 18
  }
})
// proxy.name = '邓总';
// proxy.age.n = 19;
// console.log(proxy.age.n);
// proxy.sex = 'boy'
let proxy = reactive([1,2,3,4])