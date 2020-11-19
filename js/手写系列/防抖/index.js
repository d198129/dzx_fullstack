//在一定时间呢，如果持续请求，就一直不执行,在固定时间内没有第二次操作才执行
function debounce(fn, delay) {
    let timer = null;
    return function() {
            let arg = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(arg);
            }, delay)
        }
        // return function() {
        //     let arg = arguments;
        //     const cbt = this
        //     clearTimeout(timer);
        //     timer = setTimeout(function() {
        //         fn.apply(cbt, arg);
        //     }, delay)
        // }
}