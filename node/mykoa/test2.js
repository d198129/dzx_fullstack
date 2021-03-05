let Koa = require('./koa/application')
let app = new Koa()

app.use((ctx) => {
  console.log(ctx.req.url);
  console.log(ctx.request.req.url);
  console.log(ctx.request.url);
  console.log(ctx.url); // ctx会代理ctx.request上的属性
})

app.listen(3000)