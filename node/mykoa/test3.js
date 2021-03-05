function app(){}
app.middleware = [];
app.use = function (callback) {
  app.middleware.push(callback);
}

app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
})

app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
})

app.use((ctx, next) => {
  console.log(5);
  next();
  console.log(6);
})

function dispath(index) {
  // 先取出第一个中间件，让其执行，将索引递增，调用next就是将下一个中间件继续执行
  if (index = app.middleware.length) {
    return
  }
  let middleware = app.middleware[index];
  middleware({}, () => dispath(index + 1))
}

app.listen(3001);