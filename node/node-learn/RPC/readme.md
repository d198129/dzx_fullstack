# RPC
Remote Procedure Call (远程过程调用)

和 Ajax 有什么相同点？
1. 都是计算机之间的通信
2. 都是双方约定一个数据格式

和 Ajax 有什么不同点？
1. 不一定使用DNS做寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议

- 寻址 / 负载均衡
  - Ajax：使用DNS进行寻址
  - RPC： 使用特有服务器进行寻址

- TCP通信方式
  - Ajax：单工通信
  - RPC：多种形式(半双工通信，全双工通信)

- 二进制协议
  - Ajax：HTTP (html, json)
  - RPC：二进制协议 (更小的数据包体积，更快的编码速率)

# RPC 调用: Buffer 编码解码二进制数据包
  00 00 00 00 0000 0000
write(x, 0) write(x, 3) write(x,5)

protocol buffer

# RPC 调用网络：net建立多路复用的RPC通道