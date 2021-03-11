# 盒子模型
1. 标准盒模型 width
2. IE盒模型 width + padding + margin

# 画一条0.5px的线
1. transform.scale
2. border-img
3. liner-gradient

# link 和 @import的区别
1. link标签是html标签，@import是css提供的
2. link会在页面加载的时候同时加载，@import引入的css会在页面加载完成后再加载
3. link没有兼容性(兼容所有)，@import必须在IE5以上
4. link的权重高于@import

# transition 和 animation有什么区别
1. transition需要触发一个事件，animation不需要
2. transition 是2帧2帧的运行，from ... to ...，animation是一帧一帧的

# flex布局
1. 传统布局 依赖display + position + float,这种在特殊布局中非常不方便，比如垂直居中
2. flex-direction: row | column 决定主轴的方向
3. flex-wrap: nowrap | wrap 决定换行规则

# BFC
1. 块级格式化上下文，是一个独立的渲染区域，有一定的布局规则
2. BFC区域不会与float box重叠
3. BFC是页面上的一个独立容器，子元素不会影响外面
4. 计算BFC区域高度时，浮动元素的高度也会参与计算
5. 怎么生成BFC：
  - float不为none
  - position为flex和absolute
  - display为inline-block,flex，table-cell
  - overflow 不为visible

# 垂直居中的方法
1. position
2. flex
3. margin(知道父容器的宽高)
4. table-cell(父) vertical-align: middle(子)

# js动画和css动画
- 渲染线程分为 main thread 和 compositor thread
- 如果css动画只改变transform和opacity，这时css动画得以在compositor thread完成
而js动画会在main thread 执行
区别：
1. js比css大
2. css比js更简单，性能会更好
3. 对帧表现不好的低版本浏览器，css3可以做到自然降级
4. css动画有天然的事件支持
5. css3有兼容性问题

# 块级元素和行内元素
块级： 独占一行，并自动填充父元素，可以设置margin，padding width，height
行内： 不能独占一行，width，height会失效，并且垂直方向的padding和margin会失效

# 多行文本的省略号
一行省略号: (overflow: hidden;超出隐藏 text-overflow: ellipsis;省略号 white-space:nowrap;强制一行显示)
多行省略号：overflow: hidden;text-overflow: ellipsis;display: webkit-box;-webket-box-orient:vertical; -webkit-line-clamp: 2 ;
/*! autoprefixer: off */;

# 清除浮动
1. overflow：hidden BFC
2. 隔墙法，在后边添加标签加上clear：both
3. 伪元素 父级添加伪元素
4. 双伪元素 父级添加双伪元素

# css3的新特性
transition，transform ，display flex，box-sizing，颜色渐变，动画

# css选择器有哪些？优先级
id选择器，类选择器，标签选择器，伪元素选择器，伪类元素选择器，属性选择器
!important > 行内式 > 内部样式 > 外部样式 > 浏览器用户自定义 > 默认

# fload 的display是什么
block
# 三栏布局的实现(三列布局)
圣杯 ，双飞翼
1. flex
2. 两列定宽一列自适应 float + mrrgin
3. display: table
4. display: grid

# display:table 和 table本身有什么区别
display:table 声明能够让HTML元素和它的子节点像table元素一样使用，但是文件会比table小，div + css 逐行显示
table是页面完全加载后才显示

# 设置一个元素的背景色，背景色会填充哪些区域
除margin外的所有区域 content + padding + border

# inline-bloack，inline 和 block的区别，为什么img是inline还可以设置宽高
置换元素不受css控制

# 重绘 和 回流(重拍)

# css画三角形
width: 0;height: 0;border-right: 50px solid blue ;border-left: 50px solid blue ;border-buttom: 50px solid blue;

# css布局种类
圣杯布局，双飞翼布局，flex布局，绝对定位布局，表格布局，网格布局