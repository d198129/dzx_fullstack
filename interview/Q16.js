// arguments

function sidEffecting(arr) {
  arr[0] = arr[2]
};

function bar(a, b, c) {
  // console.log(arguments);
  c = 10;
  sidEffecting(arguments); // 参数变量和arguments 是双向绑定的;
  return a + b + c;
}

bar(1, 1, 1);

// 21