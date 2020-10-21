// function generateCapitalStringWithHashTag(str) {
//     // 1. 如果字符超过140字，返回false
//     // 2. 如果是空字符串，返回false
//     // 3. 以#开始
//     // 4. 每个单词首字母大
//     return str.length > 140 || str == '' ? false : '#' + str
//         .split(' ')
//         .map(function(word) {
//             console.log(word);
//             word.charAt(0).toUpperCase()
//             return word.charAt(0).toUpperCase() + word.slice(1)
//                 // return word.toUpperCase()
//         }) //es6数组的新方法，遍历数组的每一项，并用一个函数处理，返回新的数组
//         .join(' ')
// }
function generateCapitalStringWithHashTag(str) {
    return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join('')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(generateCapitalStringWithHashTag('hello world'));