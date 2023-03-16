# XSS 攻击

**XSS**（cross-site scripting **跨域脚本攻击**）攻击是最常见的 Web 攻击，其重点是**跨域**和**客户端执行**。有人将 XSS 攻击分为三种，分别是：

1. `Reflected XSS`（基于反射的 XSS 攻击）

2. `Stored XSS`（基于存储的 XSS 攻击）

3. `DOM-based` or `local XSS`（基于 DOM 或本地的 XSS 攻击）

## DOM-based or local XSS

基于 DOM 或本地的 XSS 攻击。一般是提供一个免费的 wifi，但是提供免费 wifi 的网关会往你访问的任何页面插入一段脚本或者是直接返回一个钓鱼页面，从而植入恶意脚本。这种直接存在于页面，无须经过服务器返回就是基于本地的 XSS 攻击。

比如：

1. 提供一个免费的 wifi。

2. 开启一个特殊的 DNS 服务，将所有域名都解析到我们的电脑上，并把 Wifi 的 DHCP-DNS 设置为我们的电脑 IP。

3. 之后连上 wifi 的用户打开任何网站，请求都将被我们截取到。我们根据 http 头中的 host 字段来转发到真正服务器上。

4. 收到服务器返回的数据之后，我们就可以实现网页脚本的注入，并返回给用户。

5. 当注入的脚本被执行，用户的浏览器将依次预加载各大网站的常用脚本库。

**这个其实就是 wifi 流量劫持，中间人可以看到用户的每一个请求，可以在页面嵌入恶意代码，使用恶意代码获取用户的信息，可以返回钓鱼页面。**

再比如：

1. 还是提供一个免费 wifi

2. 在我们电脑上进行抓包

3. 分析数据，可以获取用户的微信朋友圈、邮箱、社交网站帐号数据（HTTP）等。

![示例图片](../images/xss.png#pic_center)

结论：

这攻击其实跟网站本身没有什么关系，只是数据被中间人获取了而已，而由于 HTTP 是明文传输的，所以是极可能被窃取的。

## 开发安全措施：

1. 使用 HTTPS！就跟我前面[《HTTP 与 HTTPS 握手的那些事》](http://www.cnblogs.com/lovesong/p/5186200.html)这篇文章说的，HTTPS 会在请求数据之前进行一次握手，使得客户端与服务端都有一个私钥，服务端用这个私钥加密，客户端用这个私钥解密，这样即使数据被人截取了，也是加密后的数据。

服务端可以干的事:

2. HttpOnly

其实就是现在 HTTP 协议（HTTPS 也是可以的）才能读取 cookies，JavaScript 是读取不到 cookies 的。支持浏览器是 IE6+、Firefox2+、Google、Safari4+。

JavaEE 给 Cookie 添加 HttpOnly 的代码：

```js
response.setHeader(
  'Set-Cookie',
  'cookiename=value; Path=/;Domain=domainvalue;Max-Age=seconds;HTTPOnly'
)
```

PS：对于 HTTPS，还是可以设置 Secure 字段，对 Cookie 进行安全加密。

这是本质上不是预防 XSS，而是在被攻破时候不允许 JS 读取 Cookie。

3.处理富文本

有些数据因为使用场景问题，并不能直接在服务端进行转义存储。不过富文本数据语义是完整的 HTML 代码，在输出时也不会拼凑到某个标签的属性中，所以可以当特殊情况特殊处理。处理的过程是在服务端配置富文本标签和属性的白名单，不允许出现其他标签或属性（例如 script、iframe、form 等），即”XSS Filter“。然后在存储之前进行过滤（过滤原理没有去探明）。

Java 有个开源项目 Anti-Samy 是非常好的 XSS Filter：

```js
Policy ploicy = Policy.getInstance(POLICY_FILE_LOCATION);
AntiSamy as = new AntiSamy();
CleanResults cr = as.scan(dirtyInput, policy);
MyUserDao.storeUserProfile(cr.getCleanHTML());
```

PS：当然也可以在前端显示前过滤，但是我觉得，让前端人员少做东西好，并且服务端只需要转一次。

客户端可以干的事

1. 输入检查

输入检查的逻辑，必须放在服务器端代码中实现（因为用 JavaScript 做输入检查，很容易被攻击者绕过）。目前 Web 开发的普遍做法，是同时在客户端 JavaScript 中和服务器代码中实现相同的输入检查。客户端 JavaScript 的输入检查，可以阻挡大部分误操作的正常用户，从而节约服务资源。

另外攻击者可能输入 XSS 的地方，例如：

```js
1.页面中所有的input框
2.window.location（href、hash等）
3.window.name
4.document.referrer
5.document.cookie
6.localstorage
7.XMLHttpRequest返回的数据
```

2. 输出检查

一般就是在变量输出到 HTML 页面时，使用编码或转义的方式来防御 XSS 攻击。XSS 的本质就是“HTML 注入”，用户的数据被当成了 HTML 代码一部分来执行，从而混淆了原本的语义，产生了新的语义。

触发 XSS 的地方

```js
1.document.write
2.xxx.innerHTML=
3.xxx.outerHTML=
4.innerHTML.replace
5.document.attachEvent
6.window.attachEvent
7.document.location.replace
8.document.location.assign
```

3. 转义所有可能存在 xss 攻击的输入和输出

## 总结

XSS 攻击的特点就是：尽一切办法在目标网站上执行非目标网站上原有的脚本（某篇文章说的）。本地的 XSS 攻击的示例 2 其实不算 XSS 攻击，只是简单流量劫持。前两种 XSS 攻击是我们开发时候要注意的，而流量劫持的则可以使用 HTTPS 提高安全性，。

这攻击其实跟网站本身没有什么关系，只是数据被中间人获取了而已，而由于 HTTP 是明文传输的，所以是极可能被窃取的。

一般存储型 XSS 风险高于反射型 XSS。反射型 XSS 一般要求攻击者诱使用户点击一个包含 XSS 代码的 URL 链接；而存储型只需要用户查看一个正常的 URL 链接，当用户打开页面时，XSS Payload 就会被执行。这样漏洞极其隐蔽，且埋伏在用户的正常业务中，风险很高。（引自白帽子讲 Web 安全原文）

[完整参考链接 1](https://www.cnblogs.com/lovesong/p/5199623.html)
[完整参考链接 2](https://www.cnblogs.com/lovesong/p/5223989.html)

```

```
