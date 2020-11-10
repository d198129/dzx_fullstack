// let key1 = 1 //Symbol(1)--变量唯一
// let key2 = 1 //Simbol(1)
// console.log(key1 == key2); //false

// console.log(typeof(null));
// console.log('hello'.length);

// 0.1 + 0.2 == 0.3 //0.30000000004 ——计算精度丢失

// let obj = {
//     name: 'wn'
// }
// const a = [] //#001
// const b = a //指针的复制
// b.push(1) //[1]
// console.log(a); //[1]

// function test(person) {
//     person.age = 26
//     person = { //#002
//         name: 'yyy',
//         age: '30'
//     }
//     return person
// }
// const p1 = { //#001
//     name: 'xxx',
//     age: '25'
// }
// const p2 = test(p1)
// console.log(p1); //xxx 26
// console.log(p2); //yyy 25
// 1. 函数传参是传递对象指针的副本
// 2. p1 和 person 具有相同的指针,person被修改,p1也会被修改
// 3. person拥有了一个新的内存地址
// console.log(typeof(1)); //number
// console.log([] instanceof Array);true
// console.log('hello' instanceof String);//false

//让instanceof 也能判断原始类型
class PrimitiveString {
    static[Symbol.hasInstance](x) { //Symbol.hasInstance让我们自定义instanceof的行为
        return typeof x === 'string'
    }
}
console.log('helllo'
    instanceof PrimitiveString);