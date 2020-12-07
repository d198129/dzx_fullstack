### 存储服务
    www web 服务 
    3000mongodb 27017 
    mysql 3306

全栈开发
- :8080 vue 前端 npm run start
- webpack webpack-dev-server
- vue-router

- :3000 后端 node + go
- :27017 数据库服务
- MVC

1. 启动mongodb 进程
  - mongod -- dbpath "E:/data/db"
  - NOSQL /test/a.bson
  - 关系数据库
  - mongo 数据库的交互命令行

### mongo 的交互语句
- show dbs;
- use toutorial;
- mysql 要去建表？
- mongodb直接用
- 前端非常友好 给个JSON 它就存了 没有太严格的关系定义 字段可有可无，没那么严格，物联网时代以及碎片块化信息的收集
- db.users.insert({});
- mysql table -> mongodb collection
- find() $and--ObjectId("")
- update() 
- db.numbers.find({num:500}).explai("executionStats");
- 索引
  1. mysql 关系数据库、mongodb NOSQL都有学习，对js特别友好，json 存就可以，索引进行过学习
  nums 20000条json文件 num: i
  nums:500

### 电商应用
- node mongodb 的联合
- 数据怎么进入数据库
  - 先连接 mongodb url once('oepn')
  - 对数据库建模 userSchema 字段名 + 类型
  - mongoose.model('User',userSchema); -> new User.save()