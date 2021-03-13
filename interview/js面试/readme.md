# 谈谈变量提升
当js代码执行的时候，会产生执行环境，执行环境会分为全局执行环境和函数体执行环境

# bind、call、applay区别

# 简单介绍一下原型链
每个函数都有prototype属性，该属性指向原型。原型就是创建该函数的工厂
每个对象都有 __proto__属性，指向了该对象的构造函数的原型，其实这个属性指向的是[[prototype]],但是[[prototype]]是内部属性，我们访问不到，所以用__proto__来访问
对象可以通过__proto__来寻找不属于该对象的属性，__proto__将对象链接起来组成了原型链

# 怎么判断对象类型
instanceof
Object.prototype.toString.call() [object, Type]

# 箭头函数的特点
箭头函数没有this，箭头函数里面的this取决于他外面的第一个不是箭头函数的函数的this
没有prototype

# async await的优缺点
先描述async await 作用，和为什么有这个作用
优势在于处理promise.then的调用链，代码更清晰
缺点是await会阻塞源码，滥用会导致性能问题

# generator原理

# Promise

# == 和 === 区别，什么情况下用 ==

# 浏览器中的Eventloop 和 Node中的区别

# cookie,  localStorage,  session,  indexDB 的区别
4k  5M 5M  无限大
携带在header中，影响请求的性能
cookie：
  value： token
  http-only： 不能通过js访问cookie
  secure：只能在HTTPS协议中携带
  same-site：浏览器不能在跨域请求中携带cookie


# 怎么判断页面是否加载完成
load，DOMContentLoading (html完全加载)


# 跨域怎么解决
1. JSONP(只能用于get请求)
2. cors() 后端实现cors，就可以实现跨域
3. document.domain (只适用于二级域名相同的情况，a.test.com b.test.com)
4. postMessage
5. 代理 Nginx

# 浏览器缓存
缓存机制是为了避免资源的重复加载，提高整体页面的加载速度
  - 强缓存：可以通过两种响应头来实现 Expires 和 Cache-Control,表示在缓存期间不需要请求
  - 协商缓存：last-Modified(本地文件最后的修改日期)，If-Modified-SinceI(把last-Modified的值发给服务器)

# Bable原理
Token - AST  遍历AST - 生成新的代码

# get 和 post 请求有什么区别
1. 参数拼接
2. get可以使用缓存，post不能使用缓存

# 继承

# 事件流
1. 捕获
2. 触发
3. 冒泡

# 如何让事件先冒泡，后捕获
监听捕获和冒泡，分别对应相应的处理函数，先暂停执行捕获事件，直到冒泡事件执行完毕再执行捕获

# 事件委托

# new干了什么

# 防抖，节流

# js垃圾回收机制

# 对象深克隆

# once 函数

# instanceof

# 闭包

# 深浅拷贝

# 模块化
ECMA规范，js
export default a => import a from ''
export a => import { a } from ''
CommonJs 是node独有的规范，浏览器中使用就需要Browserify 解析
module.export = { a } => require { a } = ''