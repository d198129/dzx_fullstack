## 9. 回文数
    判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
    示例 1:

    输入: 121
    输出: true
    示例 2:

    输入: -121
    输出: false
    解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

- 题解一
1. 如果x小于0，直接返回false
2. 0 < x < 10 返回true
3. 利用求余数然后乘10一直循环磨10，最后取得的结果与原来的数字对比，相等返回true，不相等返回false

- 题解二
第一步和第一步和题解一一样
3. 循环求余然后push到一个数组中，然后数组再join后*10变成数字再和原数字对比

- 题解三
1. 直接把数字转换为字符串在转换为数组，反转再拼接和反转前的字符串对比，相等则返回true，否则false