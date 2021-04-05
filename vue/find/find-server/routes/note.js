const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/notes')

// 发布信息
router.post('/addnote', async (ctx, next) => {
  // console.log(ctx.request.body);
  let noteid = Date.now() + '';
  let usertel = ctx.request.body.usertel;
  let date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  let time = ctx.request.body.time;
  let title = ctx.request.body.title;
  let desc = ctx.request.body.desc;
  let picture = ctx.request.body.picture;
  let isFind = '未找到'
  if (picture.length < 6) {
    for (let i = picture.length; i < 6; i++){
      picture[i] = '';
    }
  }
  let result = [noteid, usertel, date, time, title, desc, isFind, ...picture]
  await userService.addnote(result).then(res => {
    // console.log(res);
    let r = '';
    if (res.affectedRows != 0) {
      r = 'ok';
      ctx.body = {
        code: '8000',
        data: r,
        mess: '发布成功'
      };
    } else {
      r = 'error';
      ctx.body = {
        code: '8004',
        data: r,
        mess: '发布失败'
      }
    }
  }).catch(err => {
    console.log('123');
  })
})

// 查询所有动态
router.post('/allnote', async (ctx, next) => {
  await userService.finAllnote().then(res => {
    ctx.body = {
      code: '8000',
      data: res,
      mess: '查询完成'
    }
  }).catch(error => {
    console.log(error);
  })
})

// 修改动态状态
router.post('/update', async (ctx, next) => {
  let id = ctx.request.body.id;
  await userService.updatenote(id).then(res => {
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

// 查询用户动态
router.post('/mynote', async (ctx, next) => {
  let id = ctx.request.body.usertel;
  await userService.finMynote(id).then(res => {
    // console.log(res);
    ctx.body = {
      code: '8000',
      data: res,
      mess: '查询完成'
    }
  }).catch(err => {
    console.log(err);
  })
})

// 查询某类动态
router.post('/findnote', async (ctx, next) => {
  let title = ctx.request.body.title;
  await userService.findnote(title).then(res => {
    // console.log(res);
    ctx.body = {
      code: '8000',
      data: res,
      mess: '查询完成'
    }
  }).catch(err => {
    console.log(err);
  })
})

// 发表评论
router.post('/addcommon', async (ctx, next) => {
  let { noteid, username, usertel, common } = ctx.request.body;
  let comid = Date.now() + '';
  let date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  let time = new Date().toLocaleTimeString();
  let result = [comid, noteid, common, usertel, username, date, time];
  await userService.addcommen(result).then(res => {
    // console.log(res);
    let r = '';
    if (res.affectedRows != 0) {
      r = 'ok';
      let rescomm = [{ username: username, comdate: date, comtime: time, commendetail: common, noteid: noteid}]
      ctx.body = {
        code: '8000',
        data: rescomm,
        mess: '评论成功'
      };
    } else {
      r = 'error';
      ctx.body = {
        code: '8004',
        data: r,
        mess: '评论失败'
      }
    }
  }).catch(err => {
    console.log(err);
  })
})

// 查看评论
router.post('/allcommon', async (ctx, next) => {
  let noteid = ctx.request.body.noteid;
  await userService.allCommen(noteid).then(res => {
    // console.log(res);
    ctx.body = {
      code: '8000',
      data: res,
      mess: '查询完成'
    }
  }).catch(error => {
    console.log(error);
  })
})

module.exports = router