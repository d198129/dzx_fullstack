// var foo = 'bar';
// let foo = 'bar'

// const foo = 'bar'定义常量

// let example = 'Tom'
// const foo = 'this is' + example;
// const foo = `this is${example}`

//es6 新增的数组方法
// let arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));
// let newArr = [...arr.keys()]
// console.log(newArr);

// let iter = arr.entries();
// for (let e of iter) {
//     console.log(e);
// }

// console.log(iter);

// let eArr = arr.values()
// for (let e of eArr) {
//     console.log(e);
// }

// function test(fruit) {
//     if (fruit == 'apple' || fruit == 'strawberry') {
//         console.log('red');
//     }
// }

// includes
// function test(fruit) {
//     const redFruit = ['apple', 'strawerry', 'cherry'];
//     if (redFruit.includes(fruit)) {
//         console.log('red');
//     }
// }

// let people = [
//     { name: '小涛', age: 20 },
//     { name: '小叶', age: 18 },
//     { name: '大涛', age: 21 },
// ];

// function findFriend(person) {
//     return person.name === '叶总'
// }
// console.log(people.find(findFrien));

let test = ['a', 'b', 'c', 'd'];

function index(i) {
    return i == 'b'
}
console.log(test.findIndex(index));