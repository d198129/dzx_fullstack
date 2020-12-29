# 事件机制
事件触发有三个阶段:
1. window往事件触发处传播 ——— 捕获
2. 触发注册的事件
3. 从触发处往window传播 ——— 冒泡
addEventListener 第三个参数,true/false;默认false,false不开启捕获