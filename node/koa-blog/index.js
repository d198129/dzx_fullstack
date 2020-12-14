const koa = require('koa');
const path = require('path');
const config = require('./config/default');
const session = require('koa-session-minimal') // 数据库操作
const MysqlStore = require('koa-mysql-session'); // 数据库操作
const staticCache = require('koa-static-cache'); // 配置静态资源
const bodyParser = require('koa-bodyparser'); // 解析form表单
const views = require('koa-views');

const app = new koa;

// app.use((ctx) => {
//   ctx.body = 'Hello World'
// })

//存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}
//配置session中间件
app.use(session({
  key: 'USER_SIN',
  store: new MysqlStore(sessionMysqlConfig)
}));

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

//配置服务端模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension:'ejs'
}))

app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(require('./routers/signin').routes());//配路由
app.use(require('./routers/signup').routes());//配路由


app.listen(config.port, () => {
  console.log('3000端口已启用');
});