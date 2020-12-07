//引入数据库驱动
const mongoose = require('mongoose');
//将物理的数据存储转变成为一个JSON对象
//Schema 帮我们创建类，给我们API
//只要看到Schema 就相当于看到了表结构
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: String,
  date: Date,
  content:String
})
const linkSchema = new Schema({
  name: String,
  href: String,
  newPage:Boolean
})
const UserSchema = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  createTime: Number,
  articleSchema: [articleSchema],
  linkSchema: [linkSchema]
})

const User = mongoose.model('User', UserSchema);

new User({
  name: 'tmp',
  password: '0000',
  email: 'lizun@163.com',
  emailCode: '12345',
  createTime: Date.now(),
  articleSchema: [],
  linkSchema:[]
}).save(function () {
  
})

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;
db.on('error', function () {
  console.log("db error");
})
db.once('open', function () {
  console.log('db opened');
});

