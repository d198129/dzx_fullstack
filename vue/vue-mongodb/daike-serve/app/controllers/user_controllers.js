const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport')

//登录
const login = async (ctx) => {
  // ctx.body = 'aaaa';
  console.log(ctx.request.body);
  let req = ctx.request.body;
  //连接数据库，去数据库里查找是否存在该条数据库
  //获取用户的userid
  const user = await User_col.findOne({
    account: req.username
  }, {
    __v: 0,
    _id: 0
  })
  console.log(user);
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
  //解密
  const match = await passport.vaildate(req.password, pass.hash);
  ctx.status = 200;
  if (match) {
    ctx.body = {
      code: 1,
      msg: '密码成功',
      data: user
    }
    return;
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}

//注册
const register = async (ctx) => {
  // console.log(ctx.request.body);
  let req = ctx.request.body;
  const user = await User_col.findOne({
    account: req.username
  })
  ctx.status = 200;
  if (user) {
    ctx.body = {
      code: 0,
      msg:'账号已经存在'
    }
    return;
  } else {
    const userid = Date.now();
    const password = await passport.encrypt(req.password, 3);
    const newuser = await User_col.create({
      account: req.username,
      userId: userid
    });
    if (newuser) {
      const userpwd = await Password_col.create({
        hash: password,
        userId: userid
      });
      if (userpwd) {
        ctx.body = {
          code: 1,
          msg: '注册成功',
          data: {
            userId: newuser.userId,
            account: newuser.account
          }
        }
      }
    }
    // console.log(username, userpwd);
  }
}

module.exports = {
  login,
  register
}