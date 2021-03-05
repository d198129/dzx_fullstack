let url = require('url')

let request = {
  get url() {
    return this.req.url
  },
  get path() {
    return url.parse(this.req.path).pathname;
  }
}

module.exports = request