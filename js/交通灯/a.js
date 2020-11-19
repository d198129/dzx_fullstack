const fs = require('fs');
const { resolve } = require('path');
// fs.readFile('./index.html', 'utf-8', (err, file) => {
//         console.log(file);
//fs.readFile
//     })
//包装一层 promise
let p2 = (url) => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err, file) => {
        if (err) reject(err);
        else resolve(file);
    })
})

// p2('./index.html')
//     .then((file) => {
//         console.log('file', file);
//     });
// p2('./a.js')
//     .then((file) => {
//         console.log('file', file);
//     });


// p2('./index.html')
//     .then((c1) => {
//         return p2('./a.js')
//     })
//     .then((c2) => {
//         console.log(c1, c2);
//     })