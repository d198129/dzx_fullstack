const queue = [];
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');

while (queue.length0) {
  const top = queue[0];
  queue.shift()
}

//链表
//链表中数据单位名称叫 结点 结点在内存中


function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1);
node1.next = new ListNode(2);
const node3 = new ListNode(3);
[1,2,3]
node1.next.next = node3
[1, 3, 2]
node3.next = node1.next
node1.next = node3

[1, 3]
node1.next = node3.next;


// const arr = [1, 2, 3, 4];
const arr = ['haha', 1, { a: 1 }] //非连续的内存 称之为链表
const index = 10;
let node = head;
for (let i = 0; i < index && node; i++){
  node = node.next;
}