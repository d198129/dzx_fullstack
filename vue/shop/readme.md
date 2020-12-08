### 全栈目录结构
- 前台 Vue
- 管理后台 react + antd
- API后端 服务器端 node+java

vue create --vue-online-shop-frontend 前端 8080
express --vue-online-shop-backend 后端 3000
mongodb 27017

前端 生命周期 mounted axios -> 向后端通信
http://localhost:8080 -> :3000 跨域

- 后端接口先调通
  localhost:3000/users/:shunwuyu
  {
    name:'德怀'，
    sex:'男'
  }
  ^/api/v1/users/ :shunyuwu
  1. url 响应 /api/
  加路由/api/v1/
  app.use(启动路由)
  2. 返回json
  3. postman 模拟请求
  4. 前端请求
  5. 不只是域名， 端口和协议不一样都算跨域
  6. 通过App.all 后端配置解决

  - 基于mongodb 数据流
  -> Vue 界面
  1. model 层的界面
    这是一个精简版的model层 目录有了
    index.js 所有的模型定义在这里
    mongoose.Schema 根据数据库结构定义
  生成类
  2. postman 测试一下数据
  建路由