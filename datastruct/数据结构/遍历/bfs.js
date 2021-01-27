function BFS(root) {
  const queue = []; //初始化一个队列
  // 入队坐标首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    const top = queue[0]; // 取出对头元素
    // 访问top
    console.log(top.val);
    // 检查从top出发还能抵达的元素
    // for (从top出发还能遍历到的所有元素){
    //   queue.push(还能遍历到的元素)
    // }
    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }
    queue.shift(); // 访问完毕
  }
}

const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'C'
    },
    right: {
      val: 'D',
      left: {
        val: 'E'
      },
      right: {
        val: 'F'
      },
    }
  }
}

BFS(tree);