const arr = [1, 2];
// arr.unshift(0);
// arr.push(3);
arr.splice(2, 0, 3);
console.log(arr);


const stack = [];
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');

while (stack.length) {
  let top = stack[stack.length-1];
  console.log(top);
  stack.pop();
}