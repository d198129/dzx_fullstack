// class Promise {
//     constructor() {

//     }
//     all() {}
//     race() {}
// }
// Promise.prototype.catch = function() {}
// Promise.prototype.then = function() {}

function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('酒神相亲!');
            resolve('成功');
            // reject('你太丑')
        }, 1000)
    })
}

function baby() {
    console.log('小酒神出生');
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚大吉!!');
            resolve('洞房');
        }, 500)
    })
}
// xq().then(marry)
xq()
    .then((res) => {
        console.log(res);
        return marry()
    })
    .then((res) => {
        console.log(res);
        baby()
    })
    // .catch((err) => {
    //     console.log(err);
    // })