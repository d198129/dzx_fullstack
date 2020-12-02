const fs = require('fs');
const AipOcrClient = require('baidu-aip-sdk').ocr;

const APP_ID = "23083153";
const API_KEY = "In5GyO4zW6GNCmcykojtG5nE";
const SECRET_KEY = "CKBMExrDc1kflhiwTlRKCl4OGGuStjjH";

/// Sync  I/O Async 同步
const image = fs.readFileSync("carpai.jpg").toString("base64");
const options = {}
options["multi_detect"] = true;
const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
client.licensePlate(image, options).then((result) => {
  console.log(result);
})
  .catch(err => {
  logger.info(err);
    
})