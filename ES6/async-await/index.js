// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aaa');
//             resolve('输出成功')
//         }, 1000)
//     })
// }

// function b() {
//     console.log('bbb');
// }
// // a()
// // b()
// a()
//     .then((res) => {
//         console.log(res);
//         b()
//     })//a().then(b).catch

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('你好');
            resolve('ok')
        }, ms)
    })
}
//async声明该函数内部可能存在异步情况
async function asyncPrint(value, ms) {
    await timeout(ms); //阻塞厚后面的代码
    console.log(value); //去到微任务队列
}
console.log('ok');
asyncPrint('hello world', 1000)