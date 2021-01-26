const http = require('http');
const server = http.createServer();


server.on('request', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', '*');
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return
  }
})

// 接收切片
// 合成切片


server.listen(3000, () => {
  console.log('3000端口已启用');
})