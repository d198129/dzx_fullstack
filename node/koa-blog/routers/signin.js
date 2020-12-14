const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/c-signin')

// router.post('/signin', (ctx) => {
//   //展示登陆页面的html结构
//   ctx.body = 'signin'
// })
router.post('/signin',controller.postSingin)

module.exports = router