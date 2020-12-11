const User_col = require('../models/user')
const Password_col = require('../models/password')
const login = async (ctx) => {
  // ctx.body = 'aaaa';
  console.log(ctx.request.body);
  let req = ctx.request.body;
  //连接数据库，去数据库里查找是否存在该条数据库
  //获取用户的userid
  const user = await User_col.findOne({
    account: req.username
  })
  if (!user) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg:'账号不存在'
    }
    return;
  }
  //能找到这个这个账号
  const userId = user.userId;
  //匹配密码
  const pass = await Password_col.findOne({
    userId
  }, {
    hash:1
  })
  //如果再密码表里找到了账号相同的id
  //判断该id对应的密码和前端传过来的密码是否匹配
}

module.exports = {
  login
}