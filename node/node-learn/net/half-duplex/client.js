const net = require('net');

const socket = new net.Socket({});

socket.connect({
  host: '127.0.0.1',
  port: 4000
})

// socket.write('good morning wn');

const lessonids = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]

// console.log(buffer);
socket.write(encode());

// 接收到服务端往socket管道里面添加的内容
socket.on('data', (buffer) => {
  console.log(buffer.toString());

  socket.write(encode());
})

function encode() {
  let buffer = Buffer.alloc(4);
  buffer.writeInt32BE(lessonids[Math.floor(Math.random() * lessonids.length)]);
  return buffer;
}