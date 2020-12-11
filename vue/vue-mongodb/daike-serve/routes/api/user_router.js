const Router = require('koa-router');
const router = new Router();
const user_controller = require('./../../app/controllers/user_controllers')

router.post('/login', user_controller.login)
  //拿到前端传过来的参数，去数据库里匹配是否存在该条数据
  //查找语句
  //获取用户的userId

module.exports = router;