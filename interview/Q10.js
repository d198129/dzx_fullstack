// 并非都是奇偶树

function isOdd(num) {  // 奇数
  return num % 2 == 1;
}

function isEven(num) {  // 偶数
  return num % 2 == 0;
}

function isSance(num) {
  return isEven(num) || isOdd(num);
}

var value = [7, 4, '13', -9, Infinity];
value.map(isSance);
