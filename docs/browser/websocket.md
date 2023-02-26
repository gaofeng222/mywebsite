# websocke 和 http 的区别

## 相同：

建立在 TCP 之上，同 http 一样通过 TCP 来传输数据

## 不同:

HTTP 协议为单向协议，即浏览器只能向服务器请求资源，服务器才能将数据传送给浏览器，而服务器不能主动向浏览器传递数据。分为长连接和短连接，短连接是每次 http 请求时都需要三次握手才能发送自己的请求，每个 request 对应一个 response；长连接是短时间内保持连接，保持 TCP 不断开，指的是 TCP 连接。

WebSocket 解决客户端发起多个 http 请求到服务器资源浏览器必须要经过长时间的轮询问题。

一种双向通信协议，在建立连接后，WebSocket 服务器和 Browser/UA 都能主动的向对方发送或接收数据，就像 Socket 一样，不同的是 WebSocket 是一种建立在 Web 基础上的一种简单模拟 Socket 的协议；

WebSocket 需要通过握手连接，类似于 TCP 它也需要客户端和服务器端进行握手连接，连接成功后才能相互通信。

WebSocket 在建立握手连接时，数据是通过 http 协议传输的，“GET/chat HTTP/1.1”，这里面用到的只是 http 协议一些简单的字段。但是在建立连接之后，真正的数据传输阶段是不需要 http 协议参与的。

TCP/IP 协议（用来传输数据）

socket 是对 TCP/IP 协议的封装，本身并不是协议，而是一个调用接口(API)，通过 Socket，我们才能使用 TCP/IP。

四层，分别为应用层（Telnet、FTP 和 Email 等）、运输层（TCP、UDP）、网络层（IP、ICMP、IGMP 等）和链路层（设备驱动程序）

三次握手完毕后，客户端与服务器才正式开始传送数据

四次挥手后断开连接

套接字之间的连接过程分为三个步骤：服务器监听，客户端请求，连接确认

TCP：面向连接，通过三次握手建立连接，通讯完成时要拆除连接，只能端到端传输

UDP：无连接，可实现广播发送

## TCP/IP 通信数据流

[![pSvoLM4.png](https://s1.ax1x.com/2023/02/23/pSvoLM4.png)](https://imgse.com/i/pSvoLM4)

当我们访问一个网站的时候，发生的事情

[![pSvoXL9.png](https://s1.ax1x.com/2023/02/23/pSvoXL9.png)](https://imgse.com/i/pSvoXL9)
