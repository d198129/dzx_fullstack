// let age: number = 10;
// let arr:number[] = [1, 2, 3, 4];
// arr.push(5);

// let tuple1:(string | number)[] = ['wn', 20];
// let tuple: [string, number] = ['wn', 20];

// interface // 定义接口类型的
interface Person {
  readonly id?: number,
  name: string,
  age: number,
  isshuai?: boolean // 可加可不加的属性
}

let wn: Person = {
  name: '蜗牛',
  age: 18,
  id: 10
}

wn.isshuai = true;
wn.id


function add(x: number, y: number, z?: number): number {
  return x + y;
}

const add2: (x: number, y: number, z?: number) => number = add;

const sum = (x: number, y: number) => {
  return x + y;
}

interface ISum {
  (x: number, y: number): number
}

const sum2: ISum = sum;

// 断言
let numberOrString: number | string = 1;
numberOrString.toString()

function getLength(input: string | number): number {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const number = input as number;
    return number.toString().length;
  }
}

// 类型守卫
function getLength1(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input.toString().length;
  }
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const cat = new Animal('lily');;

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobai = new Dog('xiaobai');
console.log(xiaobai.run());

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  run() {
    return 'miaomiao,' + super.run();
  }
}

const maomao = new Cat('maomao');
console.log(maomao.run());

interface Radio {
  switchRadio(trigger: boolean):void
}

class Car implements Radio {
  switchRadio(triggrr) {
    return 123;
  }
}

enum Direction {
  UP,
  Down,
  Left,
  Right
}
console.log(Direction.UP);


// 泛型，指在定义函数的时候，接口或类的时候，不预先定义具体的类型，而在使用的时候指定类型
function echo<T>(arg: T):T {
  return arg
}