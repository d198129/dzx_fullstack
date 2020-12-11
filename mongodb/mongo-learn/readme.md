# mongoDB 的学习

### mongodb的特点
1. 高性能 处理高并发
2. 高可用性
3. 高扩展性
4. 丰富的查询支持
### 常用操作数据库/表命令
1. 创建/进入 数据库 -> use 数据库名称
2. 查看所有数据库/集合 -> show dbs/databse | show collections
3. 查看当前数据库 -> db
4. 删除数据库 -> db.dropDatabase
5. 创建集合：显示创建 db.createCollection("mycollection");
6. 删除集合 -> db.collection.drop();
7. 单个文档的插入 db.collection.insert({})/save()  //这里隐式创建了一个集合
8. 文档的批量插入 db.collection.insertMany([{},{},{}])
9. 文档的查询 db.collection.find() /查询所有
10. 指定条件查询 db.collection.find({_id:'1'}) findOne()只查一条
11. 投影查询 db.collection.find({_id:'1'},{_id:1})查询出来只显示_id /{_id:0强制排除_id出去}
12. try{db.collection.insertMany([{},{},{}]);} cach(e){print(e)}
13. 文档的更新,覆盖的需改 db.collection.update({_id:'1'},{likenum:NumberInt(1001)});
13. 文档的更新,局部的需改 db.collection.update({_id:'1'},{$set:{likenum:NumberInt(1001)}});
13. 文档的更新,批量需改 db.collection.update({id:'1'},{$set:{likenum:NumberInt(1001)}},{multi:true});//默认只修改一条
14. 列值增长的修改 db.collection.update({_id:'1'},{$inc:{likenum:NumberInt(1)}});
15. 删除文档 db.collection.remove({_id:'1'})
16. 分页查询 --> 统计查询 db.collection.count({条件})
16. 分页查询 --> 分页列表查询 db.collection.find().skip(4)//跳过前四条 db.collection.find().limit(3)//返回指定条数
16. 分页查询 --> db.collection.find().sort({user_id:1}) 升序：1，降序：-1
17. 正则查询 --> db.collection.find({content:/开水/})
18. 比较查询 --> db.collection.find({likenum:{$gt:NumberInt(700)}})//查询点赞数大于700的 大于$gt大于等于$gte小于$lt小于等于$lte不等于$ne
19. 包含查询 --> db.collection.find({userid:{$in:["1003","1004"]}})   不包含 nin
20. 条件查询 --> db.collection.find({$and:[{likenum:{$gte:NumberInt(700)}},{likenum:{$lt:NumberInt(2000)}}]})且/or 或

### 索引
1. 查询索引  db.collection.getIndex()
2. 创建索引  db.collection.createIndex(key,optiond)  keys:字段值,options unique/name.. keys = {userid:1,nickname:-1}
3. 删除索引  db.collection.dropIndex({user:1})/("userid_1_nickname_-1")  db.collection.dropIdexes()//删除所有
4. 执行计划测试性能 db.collection.find({userid:"1003"}).explain
5. 涵盖的查询 查询条件和和查询的投影仅包含索引字段时，MongoDB直接从索引返回结果