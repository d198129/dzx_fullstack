//let a = 1
// let b = 2
// let c =3
// let [a, b, c] = [1, 2, 3] //[a,[b,c]] = [1,[2,3]]
// console.log(a);
// ...arguments
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7]
// let [, , c] = [1, 2, 3];c=3
// let [a, b,..c] = [1];c = []

//set
// let arr = [1, 2, 2, 4, 6, 3, 5, 4, 5]
// let newArr = new Set(arr)
// console.log(newArr);
// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x);
// let [foo = true] = [false] //true为默认值
// console.log(foo);
// let [x, y = 'b'] = ['a', undefined]
// console.log(y); //y=b;null特殊

// let { x, y,z } = { x: 'aaa', b: 'bbb' }
// console.log(z);//undefined
// let { log, sin, cos, abs } = Math
// console.log(abs(-3)); //3
// const { log } = console
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
// console.log(baz);

// let obj = {
//     p: ['hello', { y: 'world' }]
// }
// let { p: [x, { y }] } = obj
// console.log(x + y);
// const [a, b, c, d, e] = 'hello'
// console.log(c);//l