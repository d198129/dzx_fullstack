1. 时间分片
适用于DOM结构不是很复杂的li

2. 虚拟列表
计算当前 可视区域 起始数据索引 (startIndex)
计算当前 可视区域 结束数据索引 (endIndex)
计算当前 可视区域 的数据，并渲染到页面中
计算 startIndex 对应的数据在整个列表的偏移位置 startOffset 并设置在