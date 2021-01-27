function preorder(root) {
  if (!root) return;
  console.log('当前遍历的节点值是：', root.val);
  
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right)
}


let root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}

preorder(root);