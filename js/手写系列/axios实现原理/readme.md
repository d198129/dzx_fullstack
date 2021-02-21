# axios用法
1. 默认配置
  - axios.defaults.method = 'GET' // 设置默认的请求类型为get
  - axios.defaults.baseURL = 'http://localhost:3000' // 设置基础url
  - axios.defaults.params = { id : 100 } // 设置默认请求url参数信息
  - axios.defaults.timeout = 3000; // 配置请求超时时间
2. 创建axios实例对象
  - const duanzi = axios.create({
    baseURL: 'https://api.apiopen.top',
    timeout: '2000'
  })创建出来的实例与axios功能几乎一样
3. 拦截器
  - 请求拦截器：axios.interceptors.request.use(function(){},function(){});
  - 响应拦截器：axios.interceptors.response.use(function(){},function(){});
4. 取消请求
  - 请求时把cancel = c;判断cancel来决定是否取消发送请求