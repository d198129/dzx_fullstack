let Koa = './koa/application.js';
let app = new Koa();

app.use((req, res) => {
  res.end('hello wn')
})


app.listen(3000);