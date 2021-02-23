function Axios(config) {
  // 初始化
  this.defaults = config; 
  this.intercepters = {
    request: {},
    response: {}
  }
}

// 原型添加相关的方法
Axios.prototype.request = function (config) {
  console.log('发送AJAX请求，请求的类型是' + config.method );
}

Axios.prototype.get = function (config) {
  return this.request({ method: 'GET' });
}

Axios.prototype.post = function (config) {
  return this.request({ method: 'POST' });
}

// 声明函数
function createInstance(config) {
  // 实例化一个对象
  let context = new Axios(config); // config.get() config.post(),但是不能当函数使用context() ×
  // 创建请求函数
  let instance = Axios.prototype.request.bind(context); // instance 是一个函数 并且可以instance({}) 此时Instance 不能instance.get;
  // 将Axios.prototype 对象中的方法添加到instance函数对象中
  Object.keys(Axios.prototype).forEach(key => {
    // console.log(key);
    instance[key] = Axios.prototype[key].bind(context); // this.request  this.get/post
  })
  // console.log(instance); // console.dir()
  // 为instance  函数对象 添加属性default 与 interceptors
  Object.keys(context).forEach(key => {
    instance[key] = context[key];
  });

  return instance;
}

let axios = createInstance({ method: 'GET' });