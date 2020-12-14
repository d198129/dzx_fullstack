const koa = require('koa');
const path = require('path');
const config = require('./config/default');
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session');
const views = require('koa-views');

const app = new koa;


app.use(require('./routers/signin').routes());

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

//配置服务端模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension:'ejs'
}))

app.listen(config.port, () => {
  console.log('300端口已启用');
});