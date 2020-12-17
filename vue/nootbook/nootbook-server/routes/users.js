const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const fun = require('../controllers/util')

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
      if (res.length) {
        ctx.body = {
          code: '8000',
          data: res,
          mess: '查询成功'
        }
      } else {
        ctx.body = {
          code: '8004',
          mess: '没查到数据'
        }
      }
  })
    .catch(err => {
    console.log('21');
  })
})

//查询笔记详情
router.post('/findNoteDetail', async (ctx, next) => {
  let _id = ctx.request.body.id;
  await userService.findDetail(_id)
    .then(res => {
    // console.log(res);
      if (res.length) {
        ctx.body = {
          code: '8000',
          data: res,
          mess: '查询成功'
        }
    }
    })
  .catch(err => {
    console.log('出错了');
  })
})

//写笔记
router.post('/insertNote', async (ctx, next) => {
  let _id=  Math.floor(Math.random()*7);
  let userId = ctx.request.body.userId;
  let title = ctx.request.body.title;
  let note_type = ctx.request.body.note_type;
  let note_content = ctx.request.body.note_content;
  let is_collection = 0;
  let c_time = fun.newTime();
  let m_time = fun.newTime();
  let head_img = ctx.request.body.head_img;
  let collection_id = null;
  let nickname = ctx.request.body.nickname;
  let value = [_id, userId, title, note_type, note_content, is_collection, c_time, m_time, head_img, collection_id, nickname];
  // console.log(value);
  await userService.insertNote(value)
    .then(res => {
    // console.log(res);
      console.log('123');
      let r = '';
      if (res.affectedRows != 0) {
        r = 'ok';
        ctx.body = {
          code: '80000',
          data: r,
          mess: '存储成功'
        }
      } else {
        r = 'error';
        ctx.body = {
          code: '80004',
          data: r,
          mess: '存储失败'
        }
      }
    })
  .catch(err => {
    console.log('出错了');
  })
})

module.exports = router
