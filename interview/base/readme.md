## 原始类型有几种？
    Boolean null undefined number string symbol
## null 是对象吗？
    是 object
    000 代表的是对象，null的二进制都是0
## 原始类型和对象类型有什么差别？
    原始类型存的是值
    对象类型存的是地址(指针)
## typeof能正确判断的类型是？
    typeof只能判断原始类型(null除外),只能认得出原始类型
    instanceof 只能判断引用类型，不能判断原始类型
## 让instanceof 也能判断原始类型
## instanceof 原理
## 类型转换
    转为布尔值
    转为数字
    转为字符串
## 对象转原始值
    对象在转类型的时候会调用内置的[[ToPrimitive]]
    - 如果已经是原始类型，那就不用转换了
    - 调用x.valueof(),如果转为了基础类型就返回值
    - 调用x.toString(),如果转为了基础型就返回值
    - 如果还没有转为原始类型,就报错
## 四则运算
    +加法：运算中其中一方为字符串，另一方一定会转换成字符串
        如果一方不是数字或字符串，那就会把他转换成数字或字符串进行运算
    *乘法/除法：只要有一方是数字则另一方也一定会转为数字来运算
## == 和===区别？(index2.js)

## 什么是闭包？(index2.js)

## 深浅拷贝 (copy.js)
    Object.assign() 如果拷贝的属性是原始值类型，那么是深拷贝，如果拷贝的属性是引用类型，那么是浅拷贝
    JSON.parse(JSON.stringify())的缺陷：
    1.会忽略undefined
    2.会忽略symbol
    3.不能序列化函数
    4.不能解决循环引用的对象