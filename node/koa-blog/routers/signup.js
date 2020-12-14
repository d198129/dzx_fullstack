const Router = require('koa-router');
const userModel = require('../lib/mysql')
const controller = require('../controller/c-signup')
const router = new Router();

// router.post('/signin', (ctx) => {
//   //展示登陆页面的html结构
//   ctx.body = 'signin'
// })
router.get('/signup', async (ctx, next) => {
  await ctx.render('signup', {
    session: ctx.session
  })
})

//点击注册按钮的响应事件
router.post('/signup',controller.postSignup)
module.exports = router