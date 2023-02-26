# http/https/http2 的比较

[![pSvI59O.md.png](https://s1.ax1x.com/2023/02/23/pSvI59O.md.png#pic_center)](https://imgse.com/i/pSvI59O)

## http

---

超文本传输 ​​ 协议（HTTP）是用于传输诸如 HTML 的超媒体文档的应用层协议。它被设计用于 Web 浏览器和 Web 服务器之间的通信，但它也可以用于其他目的。 HTTP 遵循经典的客户端-服务端模型，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。 HTTP 是无状态协议，意味着服务器不会在两个请求之间保留任何数据（状态）。虽然通常基于 TCP / IP 层，但可以在任何可靠的传输层上使用;也就是说，一个不会静默丢失消息的协议，如 UDP。

## http1.0 时代

影响一个 HTTP 网络请求的因素主要有两个：带宽和延迟。

- 带宽：如果说我们还停留在拨号上网的阶段，带宽可能会成为一个比较严重影响请求的问题，但是现在网络基础建设已经使得带宽得到极大的提升，我们不再会担心由带宽而影响网速，那么就只剩下延迟了。

- 延迟：

* 浏览器阻塞（HOL blocking）：浏览器会因为一些原因阻塞请求。浏览器对于同一个域名，同时只能有 4 个连接（这个根据浏览器内核不同可能会有所差异），超过浏览器最大连接数限制，后续请求就会被阻塞。

* DNS 查询（DNS Lookup）：浏览器需要知道目标服务器的 IP 才能建立连接。将域名解析为 IP 的这个系统就是 DNS。这个通常可以利用 DNS 缓存结果来达到减少这个时间的目的。

* 建立连接（Initial connection）：HTTP 是基于 TCP 协议的，浏览器最快也要在第三次握手时才能捎带 HTTP 请求报文，达到真正的建立连接，但是这些连接无法复用会导致每次请求都经历三次握手和慢启动。三次握手在高延迟的场景下影响较明显，慢启动则对文件类大请求影响较大。

##主要区别

HTTP1.0 最早在网页中使用是在 1996 年，那个时候只是使用一些较为简单的网页上和网络请求上，而 HTTP1.1 则在 1999 年才开始广泛应用于现在的各大浏览器网络请求中，同时 HTTP1.1 也是当前使用最为广泛的 HTTP 协议。 主要区别主要体现在：

1.缓存处理，在 HTTP1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，HTTP1.1 则引入了更多的缓存控制策略例如 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等更多可供选择的缓存头来控制缓存策略。

2.带宽优化及网络连接的使用，HTTP1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。

3.错误通知的管理，在 HTTP1.1 中新增了 24 个错误状态响应码，如 409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。

4.Host 头处理，在 HTTP1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个 IP 地址。HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会报告一个错误（400 Bad Request）。

5.长连接，HTTP 1.1 支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个 TCP 连接上可以传送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟，在 HTTP1.1 中默认开启 Connection： keep-alive，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。

## Https

**HTTP Strict Transport Security**

(通常简称为 HSTS) 是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源, 禁止 HTTP 方式.

Strict Transport Security 解决了这个问题；只要你通过 HTTPS 请求访问银行网站，并且银行网站配置好 Strict Transport Security，你的浏览器知道自动使用 HTTPS 请求，这可以阻止黑客的中间人攻击的把戏。

**启用 Strict Transport Security**

开启 HSTS 只需要当通过 HTTPS 方式访问你的网站时，返回 Strict-Transport-SecurityHTTP 头信息:
Strict-Transport-Security: max-age=expireTime [; includeSubdomains]

## HTTPS 与 HTTP 的一些区别

[![pSvIqHI.md.png](https://s1.ax1x.com/2023/02/23/pSvIqHI.md.png#pic_center)](https://imgse.com/i/pSvIqHI)

1. HTTPS 协议需要到 CA 申请证书，一般免费证书很少，需要交费。
2. HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，HTTPS 运行在 SSL/TLS 之上，SSL/TLS 运行在 TCP 之上，所有传输的内容都经过加密的。
3. HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
4. HTTPS 可以有效的防止运营商劫持，解决了防劫持的一个大问题。

[![pSvTywR.png](https://s1.ax1x.com/2023/02/23/pSvTywR.png)](https://imgse.com/i/pSvTywR)

## 使用 SPDY 加快你的网站速度

> 2012 年 google 如一声惊雷提出了 SPDY 的方案，大家才开始从正面看待和解决老版本 HTTP 协议本身的问题，SPDY 可以说是综合了 HTTPS 和 HTTP 两者有点于一体的传输协议，主要解决：

1.  **降低延迟**，针对 HTTP 高延迟的问题，SPDY 优雅的采取了多路复用（multiplexing）。多路复用通过多个请求 stream 共享一个 tcp 连接的方式，解决了 HOL blocking 的问题，降低了延迟同时提高了带宽的利用率。
2.  **请求优先级**（request prioritization）。多路复用带来一个新的问题是，在连接共享的基础之上有可能会导致关键请求被阻塞。SPDY 允许给每个 request 设置优先级，这样重要的请求就会优先得到响应。比如浏览器加载首页，首页的 html 内容应该优先展示，之后才是各种静态资源文件，脚本文件等加载，这样可以保证用户能第一时间看到网页内容。
3.  **header 压缩**。前面提到 HTTP1.x 的 header 很多时候都是重复多余的。选择合适的压缩算法可以减小包的大小和数量。
4.  **基于 HTTPS 的加密协议传输**，大大提高了传输数据的可靠性。
5.  **服务端推送（server push）**，采用了 SPDY 的网页，例如我的网页有一个 sytle.css 的请求，在客户端收到 sytle.css 数据的同时，服务端会将 sytle.js 的文件推送给客户端，当客户端再次尝试获取 sytle.js 时就可以直接从缓存中获取到，不用再发请求了。SPDY 构成图：

[![pSvIOEt.png](https://s1.ax1x.com/2023/02/23/pSvIOEt.png#pic_center)](https://imgse.com/i/pSvIOEt)

> SPDY 位于 HTTP 之下，TCP 和 SSL 之上，这样可以轻松兼容老版本的 HTTP 协议(将 HTTP1.x 的内容封装成一种新的 frame 格式)，同时可以使用已有的 SSL 功能。

## HTTP2

HTTP2.0 可以说是 SPDY 的升级版（其实原本也是基于 SPDY 设计的），但是，HTTP2.0 跟 SPDY 仍有不同的地方，主要是以下两点

● HTTP2.0 支持明文 HTTP 传输，而 SPDY 强制使用 HTTPS

● HTTP2.0 消息头的压缩算法采用 HPACK，而非 SPDY 采用的 DEFLATE

## http2 新特性

● **新的二进制格式（Binary Format）**，HTTP1.x 的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认 0 和 1 的组合。基于这种考虑 HTTP2.0 的协议解析决定采用二进制格式，实现方便且健壮。

● **多路复用（MultiPlexing**），即连接共享，即每一个 request 都是是用作连接共享机制的。一个 request 对应一个 id，这样一个连接上可以有多个 request，每个连接的 request 可以随机的混杂在一起，接收方可以根据 request 的 id 将 request 再归属到各自不同的服务端请求里面。多路复用原理图：

![多路复用原理图](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2edc6b6354f34da2b63ede26bfeed817~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

● **header 压缩**，如上文中所言，对前面提到过 HTTP1.x 的 header 带有大量信息，而且每次都要重复发送，HTTP2.0 使用 encoder 来减少需要传输的 header 大小，通讯双方各自 cache 一份 header fields 表，既避免了重复 header 的传输，又减小了需要传输的大小。

● **服务端推送（server push）**，同 SPDY 一样，HTTP2.0 也具有 server push 功能。目前，有大多数网站已经启用 HTTP2.0，例如 YouTuBe，淘宝网等网站，利用 chrome 控制台可以查看是否启用 H2：

> chrome=>Network=>Name 栏右键=>√Protocol

参考链接:[http/https/http2 的比较](https://juejin.cn/post/6844903559952089102)