# 349. 两个数组的交集
    给定两个数组，编写一个函数来计算它们的交集。
    示例 1：
    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]
- 解题思路
1. 先把其中一个数组遍历一遍然后存入map中
2. 遍历另一个数组然后通过map的方法去查找
3. 如果找到了相同的就存入set中(set存的值唯一，不能相同)