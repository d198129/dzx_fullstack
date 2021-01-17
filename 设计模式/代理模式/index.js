// 客户端 --> DNS --> 代理服务器  --> 目标服务器

// Proxy

// const proxy = new Proxy(obj, handler)

// 礼物
const persent = {
  type: '巧克力',
  value: 60
}

// 未知女生

const girl = {
  name: '小春',
  aboutMe: '...',
  age: 22,
  career: 'teacher',
  avatar: 'xxx',
  phone: 123456,
  persents: [],
  bottomValue: 50,
  lastPersent: persent
}

// 普通信息
const baseInfo = ['age', 'career'];

// 私密信息
const privateInfo = ['avatar', 'phone'];

// 男士
const user = {
  //...
  isValidated: true,
  isVip: false
}

const lmLovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && user.isValidated) {
      alert('您还没完成认证。。')
      return;
    }
    // 校验。。

    if (user.isValidated && privateInfo.indexOf(key) && !user.isVip) {
      alert('只有vip可以直接查看信息');
      return;
    }
  },
  set: function (girl, key, val) {
    if (key == 'lastPersent') {
      if (val.value < girl.bottomValue) {
        alert('你的礼物被拒收了');
        return;
      }
      girl.lastPersent = val;
      girl.persents = [...girl.persents,val]
    }
  }
})