let Koa = require('koa');
let app = new Koa();

// 获取请求的路径  req.url
// req.path
app.use((ctx, next) => {
  // ctx.body = 'hello koa'
  console.log(ctx.req.path); // ctx.req = req
  console.log(ctx.request.path); // ctx.request 是koa自己封装的属性
  console.log(ctx.request.req.path); // ctx.request.req = req
  console.log(ctx.path); // 用ctx来代理一下ctx.request
})

app.listen(3001);