//什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？ 如何实现一个深拷贝？
let a = {
        age: 1,
        info: {
            name: 'wn'
        }
    }
    // 浅拷贝
let b = a
a.age = 2
    // a = {
    //     age: 2
    // }
console.log(b.age); //2

// 深拷贝
let a = {
    age: 1
}
let b = JSON.parse(JSON.stringify(a))
a.age = 2
console.log(b.age); //1
let b = Object.assign({}, a) //只能拷贝原始类型，不能拷贝引用类型，浅拷贝的方法实现了深拷贝的效果
a.age = 2
console.log(b.age); //1


let c = {
    age: 1
}
let d = {...c } //浅拷贝的方法实现了深拷贝的效果
c.age = 2
console.log(d.age); //1

let c = {
    age: 1,
    jobs: {
        first: 'coding'
    }
}
let d = {...c }
c.jobs.first = 'waiter'
let d = JSON.parse(JSON.stringify(c))
c.jobs.first = 'waiter';
console.log(d.jobs.first); //coding

// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }
// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj);
let test = {
    age: undefined,
    sex: Symbol('man'),
    jobs: function() {},
    name: 'wn'
}
let o = JSON.parse(JSON.stringify(test))
console.log(o); //test{name:'wn'}