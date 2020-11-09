//JS 是单线程语言——同步执行
function a() {
    console.log('蜗牛');
}

function b() {
    console.log('酒神');
}

function c() {
    console.log('婷婷');
}
a()
b()
c()

//异步函数
function a() {
    setTimeout(() => {
        console.log('蜗牛');
    }, 1000)
}