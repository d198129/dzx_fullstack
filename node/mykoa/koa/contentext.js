let proto = {

}
// proto.url = ctx.request.url
function defineGetter(property, name) {
  // 自定义获取器
  proto.__defineGetter__(name, function () { // 对象代理
    return this[property][name]
  })
}
defineGetter('request', 'url')
module.exports = proto