//格式化时间
const newTime = function () {
  let time = '';
  let day = new Date().getDate();
  let mou = new Date().getMonth();
  let year = new Date().getFullYear();
  time = year + '年' + mou + '月' + day + '日'
  return time;
}
// export default newTime
module.exports = { newTime }