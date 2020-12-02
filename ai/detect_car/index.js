const fs = require('fs');
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;

const APP_ID = "23082446";
const API_KEY = "jjzHGelRbin98xweEk9s08qI";
const SECRET_KEY = "7VctUhtmtQ6jIORuTKFLLDPgy14jURO9";

/// Sync  I/O Async 同步
const image = fs.readFileSync("benc.jpg").toString("base64");
const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
// http 协议
// 云端 AI sdk
client.carDetect(image).then((result) => {
  console.log(result);
  console.log(result.result[0]);
}).catch(err => {
  console.log(err);
})