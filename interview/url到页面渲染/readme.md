# 浏览器接收到html文件
1. 词法分析 => 标记(一段一段的代码) => node节点 => Dom树

# 浏览器接收到css文件
步骤同上 => CSSOM树
递归CSSOM树确定具体的元素到底是什么样式
避免不必要的嵌套

# 生成渲染树
Dom树 + CSSOM树 = render树
渲染树只包含需要显示的节点

# 回流
GPU根据render树绘制页面布局

# 为什么操作DOM性能很差？
1. 本身浏览器存在渲染引擎和执行引擎，会造成多线程通信
2. 直接操作DOM结构会带来重绘和回流的现象


# 一次添加10000个DOM结构，怎么让屏幕不卡顿
1. 懒加载，分批分段加载


# 什么情况下会阻塞渲染
1. html，css
2. script标签会阻塞 script有async 属性 将这行js异步执行 defer

#  重绘和回流
回流：节点的几何信息发生变化
重绘：节点更改不影响布局的信息
不影响布局的操作会影响重绘
回流一定会触发重绘，重绘不一定会触发回流


# 会导致性能问题的操作：
1. 改变window大小(视口);
2. 改变字体大小
3. display: none;

# 减少重绘和回流
1. 用visibility 代替 display: none;
2. 不要把节点的属性值放在一个循环里面当成循环的变量
for(let i = 0;i < 1000;i++){
  console.log(document.querySelector(.test).style.offsetTop);
}
3. 尽量不要用table布局