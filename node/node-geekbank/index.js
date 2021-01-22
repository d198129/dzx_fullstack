const Koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');
const fs = require('fs');

const app = new Koa();

app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html','utf-8')
  })
)

// node服务器向后端服务器作rpc通信拿到真实数据
// 模版引擎放上真实数据之后
// 根据浏览器请求的地址，去返回对应的模版引擎

app.listen(3000);

// ------------------------------
const user = {
  name: 'haha',
  age: '<script src="xxx"></script>'
}
const result = `<h2>${user.name}<h2/>`

const vm = require('vm')

const templateMap = {
  templateA: '`<h2>${include("templateB")}<h2/>`',
  templateB: '`<p>hahahahaha<p/>`'
}

const context = {
  include: function(name) {
    return templateMap[name]()
  },
  helper: function() {},
  _:function(markup) {
    if (!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/ /g, '&nbsp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\r{0,}\n/g, '<br/>')
  }
}


Object.keys(templateMap).forEach(key => {
  console.log(key);
  const temp = templateMap[key]
  
  templateMap[key] = vm.runInNewContext(`
    (function() {
      return ${temp}
    });
  `, context)
})

console.log(templateMap['templateA']());

// console.log(vm.runInNewContext('`<h2>${include("subtempaltename")}<h2/>`', ));


// const template = '<h2><%=user.name %><h2/>'
// ejs.render(template, user)