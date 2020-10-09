//拿到要操作的dom结构
//在这个dom上滑动鼠标能控制滑块的位置
//能控制这个dom的高度发生变化
//根据dom的高度的值来调整视频播放的速度

var speed = document.querySelector('.speed');
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')
speed.addEventListener('mousemove', function(e) {
    var y = e.pageY - speed.offsetTop //offsetTop是获取某个dom结构到游览器顶部的距离
    var percent = y / speed.offsetHeight //offsetHeight是获取某个dom结构自身的高度
    var min = 0.4;
    var max = 4;
    var height = Math.round(percent * 100) + '%';
    var playbackRate = percent * (max - min) + min

    video.playbackRate = playbackRate;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    bar.style.height = height;
})