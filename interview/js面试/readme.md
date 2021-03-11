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

# 