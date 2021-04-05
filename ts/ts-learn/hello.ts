console.time('a-begin')
for (let i: number = 1; i < 3; i++) {
  console.log('hello TS');
}
console.timeEnd('a-begin')

enum Adog {
  red = 'abc',
  yellow = '123'
}