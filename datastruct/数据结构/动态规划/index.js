// 假设你正在爬楼梯，需要n阶你才能达到楼顶，每次你可以爬1个或2个台阶
// 你有多少种方法到楼顶？

// n = 2;
// 1 + 1
//2

// n = 3;
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// 给出达到某个目的的方案个数

// 导刊分析问题：1. 定位到问题的终点 2 .站在终点的视角，来思考后退的可能性
// f(n) = f(n-1) + f(n -2)

// f(1) = 1;
// f(2) = 2;

// 记忆化搜索 自顶向下

const f = [];
const climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  // 递归运算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return f[n]
}

console.log(climbStairs(5));

// 动态规划 自底向上
const climbStairs1 = function(n) {
  const res = [];
  res[1] = 1;
  res[2] = 2;
  for (let i = 3; i <= n; i++){
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}


console.log(climbStairs1(5));

// 量子结构
// 重叠子问题