const Koa = require('koa');

const app = new Koa();
const cors = require('koa2-cors');//解决跨域
const bodyParser = require('koa-bodyparser');//帮助koa解析参数
const user_router = require('./routes/api/user_router')

//建立mongoDB的连接
const mongoose = require('mongoose')//做mongoDB的连接
const config = require('./config')
mongoose.connect(config.db, { useNewUrlParser: true, }, (err) => {
  if (err) {
    console.error('failed');
  } else {
    console.log("连接成功");
  }
})

app.use(cors());
app.use(bodyParser());
app.use(user_router.routes())
// app.use((ctx) => {
//   ctx.body = 'hello';
// })

app.listen(3000);