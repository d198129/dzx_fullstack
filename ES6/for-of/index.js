// for-of 返回的是value;只能便利数组
// for-in 返回的是key;可遍历数组，对象//会把原型上的东西也遍历出来
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {
        name: 'jiushen',
        age: '19',
        sex: 'boy'
    }
    // for (let i = 0; i < Object.keys(obj).length; i++) {
    //     console.log(obj[Object.keys(obj)[i]]);
    // }
    // console.log(Object.keys(obj));//计算有多少个key;
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(i);
    // }
for (let i of arr) {
    console.log(i);
}
for (let key in arr) {
    console.log(key); //arr[key]
}

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}
let bar = new Foo()
console.log(bar);
for (let key in bar) {
    console.log(`index:${key} value:${bar[key]}`);
}
//ECMAScript 规范规定，数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序排列