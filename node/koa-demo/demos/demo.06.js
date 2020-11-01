const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()
const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">about</a>'
}
const main = ctx => {
        ctx.response.body = 'Hello Word'
    }
    // app.use(main)
app.use(route.get('/about', about))
app.use(route.get('/', main))
app.listen(3000, () => {
    console.log('3000端口已启动');
})