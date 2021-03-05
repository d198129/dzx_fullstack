let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')
class Koa {
  constructor() {
    this.callbackFn;
    this.context = context;
    this.request = request;
    this.response = response
  }

  use(cb) {
    this.callbackFn = cb
  }

  createContext(req, res) {
    // 深拷贝
    let ctx = Object.create(this.context) // 希望ctx可以拿到context但是不修改context
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx // 返回上下文对象
  }

  handleRequest(req, res) {
    let ctx = this.createContext(req, res)
    this.callbackFn(ctx)
  }

  listen() {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...arguments)
  }
}

module.exports = Koa