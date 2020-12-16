const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

//注册接口
router.post('/userRegister',async (ctx,next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  // console.log(_username, _userpwd, _nickname);
  let value = [_username, _userpwd, _nickname]
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: 80001,
      mess: '用户名密码和昵称不能为空'
    }
    return;
  } else {
    await userService.findUser(_username)
      .then(async (res) => {
        console.log(res);
        if (res.length) {
          ctx.body = {
            code: '80002',
            mess: '已存在该账号'
          }
        } else {
          await userService.insertUser(value)
            .then(res => {
              console.log(res);
              let r = '';
              if (res.affectedRows != 0) {
                r = 'ok';
                ctx.body = {
                  code: '80000',
                  data: r,
                  mess: '注册成功'
                }
              } else {
                r = 'error';
                ctx.body = {
                  code: '80004',
                  data: r,
                  mess: '注册失败'
                }
              }
            })
            .catch(err => {
              console.log(err);
          })
        }
      })
      .catch(err => {
        ctx.body = {
          code: '8002'
        }
    })
  }
})

//登录接口
router.post('/userLogin', async (ctx,next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  //把参数拿到数据库里查询
  await userService.userLogin(_username, _userpwd)
    .then(res => {
      console.log(res);
      let r = '';
      if (res.length) {
        r = 'ok';
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: '80000',
          data: result,
          mess: '登录成功'
        }
      } else {
        r = 'error';
        ctx.body = {
          code: '8004',
          data: r,
          mess: '账号或密码错误'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: '8002',
        data: err
      }
  })
})

//查询笔记本接口
router.post('/findNoteListByType', async (ctx, next) => {
  console.log('123');
  let _note_type = ctx.request.body.note_type;
  await userService.findNoteListByType(_note_type)
    .then(res => {
      // console.log(res);
      ctx.body = {
        code: '8000',
        data: res,
        mess: '查询成功'
      }
  })
    .catch(err => {
    console.log('21');
  })
})

module.exports = router
