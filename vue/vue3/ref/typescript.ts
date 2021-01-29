// const count = ref(ref(ref(2)));
// count.value.value.value = 3;
// { value: T }

// 泛型

// function returnItem(para: Number): Number {
//   return para;
// }

// 泛型变量就是泛型

// function returnItem<T>(para: T): T {
//   return para;
// } 

// returnItem('hello')

// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]];
// }


// function getArrayLength<T>(arg: Array<T>) {
//   console.log(arg.length);
//   return arg;
// }

type Value<T> = T;
type NumberValue = Value<Number>


// 反向推导

function create<T>(val: T): T {
  return val;
}

let num: number;
const c = create(num);


// 索引签名
type Test = {
  foo: number,
  bar: string
}

type N = Test['foo'] // number


// 条件类型
// type IsNumber<T> = T extends number ? 'yes' : 'no';
// type A = IsNumber<2> // yes;
// type B = IsNumber<'2'> // no;

type TypeName<T> = T extends string ? 'string' : T extends Boolean ? 'boollean' : 'object';
type T0 = TypeName<string> // 'string'
type T1 = TypeName<'a'> // 'string'
type T2 = TypeName<true> // 'boolean'

// keyof
// 是ts中用来获取对象key值集合的

type Obj = {
  foo: number,
  bar: string
}

// type Keys = keyof Obj // 'foo' | 'bar'

type Copy = {
  [k in keyof Obj]: Obj[k]; 
}


// infer 条件类型中的类型推断

// type Get<T> = T extends infer R ? R : never

// type T = Get<number>