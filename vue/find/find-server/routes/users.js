const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 登录
router.post('/login', async (ctx, next) => {
  let _usertel = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参树拿到数据里查询
  await userService.userLogin(_usertel, _userpwd).then(res => {
    // console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        username: res[0].username,
        usertel: res[0].usertel,
        userpwd: res[0].userpwd,
        avatar: res[0].useravatar,
      };
      ctx.body = {
        code: '8000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '8001',
        data: r,
        mess: '账号或密码输入有误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '8002',
      data: err
    }
  })
})

// 注册
router.post('/register', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _usertel = ctx.request.body.usertel
  let _avatar = ctx.request.body.avatar

  // 把参数拿到数据里查询
  if (!_username || !_userpwd || !_usertel || !_avatar) {
    ctx.body = {
      code: '8001',
      mess: '用户名和密码和昵称不能为空'
    }
  }

  await userService.findUser(_usertel).then(async (res) => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '8003',
        mess: '账号已存在'
      }
    } else {
      await userService.insertUser([_username, _userpwd, _usertel, _avatar]).then(res => {
        // console.log(res);
        let r = '';
        if (res.affectedRows != 0) {
          r = 'ok';
          ctx.body = {
            code: '8000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error';
          ctx.body = {
            code: '8004',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})

// 修改个人信息
router.post('/userinfo', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _usertel = ctx.request.body.usertel;
  await userService.updateUser([_username, _userpwd, _usertel]).then(res => {
    // console.log(res);
    let r = '';
    if (res.affectedRows != 0) {
      r = 'ok';
      ctx.body = {
        code: '8000',
        data: r,
        mess: '修改成功'
      };
    } else {
      r = 'error';
      ctx.body = {
        code: '8004',
        data: r,
        mess: '修改失败'
      }
    }
  })
})

// 查找所有用户
router.post('/alluser', async (ctx, next) => {
  let isAdmin = ctx.request.body.isAdmin;
  if (isAdmin) {
    await userService.findallUser().then(res => {
      ctx.body = {
        code: '8000',
        data: res,
        mess: '查询完成'
      }
    }).catch(error => {
      console.log(error);
    })
  }
})

// 删除用户
router.post('/deletuser', async (ctx, next) => {
  let _index = ctx.request.body.index;
  await userService.deleteUser(_index).then(res => {
    // console.log(res);
    let r = '';
    if (res.affectedRows != 0) {
      r = 'ok';
      ctx.body = {
        code: '8000',
        data: r,
        mess: '删除成功'
      };
    } else {
      r = 'error';
      ctx.body = {
        code: '8004',
        data: r,
        mess: '删除失败'
      }
    }
  })
})

module.exports = router
