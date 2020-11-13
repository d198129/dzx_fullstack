// var playerAction = process.argv[process.argv.length - 1];
const game = require('./lib')
    // const result = game(playerAction)
    // console.log(result);
    //获取进程的标准输入
process.stdin.on('data', e => {
    let count = 0;
    const playerAction = e.toString().trim();
    const result = game(playerAction)
    console.log(result);
    if (result == -1) {
        count++;
    }
    if (count == 3) {
        console.log('你太厉害了，不玩了');
        process.exit() //技术进程
    }
})