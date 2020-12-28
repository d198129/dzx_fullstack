## defineProperty 和 proxy 的区别
defineProperty 只能定义属性的度(get) 和 写(set),proxy可以定义更多的行为，比如：in,delete...
let proxy = new Proxy(target, handler);
target: 要拦截的目标对象；
handler: 一个对象，用来定制拦截对象