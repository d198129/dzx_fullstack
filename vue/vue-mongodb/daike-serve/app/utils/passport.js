//密码的加密，解密函数
const bcrypt = require('bcrypt');



//加密
const encrypt = async (password, saltTimes) => {
  const hash = await bcrypt.hash(password, saltTimes);
  return hash;
}

//解密
const vaildate = async (password, hash) => {
  const math = await bcrypt.compare(password, hash);
  return math;
}

module.exports = {
  encrypt,
  vaildate
}