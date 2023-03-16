# CSRF 攻击

CSRF（Cross Site Request Forgery），中文是**跨站点请求伪造**。  
CSRF 攻击者在用户已经登录目标网站之后，诱使用户访问一个攻击页面，利用目标网站对用户的信任，以用户身份在攻击页面对目标网站发起伪造用户操作的请求，达到攻击目的。

## CSRF 攻击的本质原因

CSRF 攻击是源于 Web 的隐式身份验证机制！Web 的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的。CSRF 攻击的一般是由服务端解决。

## CSRF 工具的防御手段

1. 尽量使用 POST，限制 GET

GET 接口太容易被拿来做 CSRF 攻击，看第一个示例就知道，只要构造一个 img 标签，而 img 标签又是不能过滤的数据。接口最好限制为 POST 使用，GET 则无效，降低攻击风险。

当然 POST 并不是万无一失，攻击者只要构造一个 form 就可以，但需要在第三方页面做，这样就增加暴露的可能性。

2. 浏览器 Cookie 策略

IE6、7、8、Safari 会默认拦截第三方本地 Cookie（Third-party Cookie）的发送。但是 Firefox2、3、Opera、Chrome、Android 等不会拦截，所以通过浏览器 Cookie 策略来防御 CSRF 攻击不靠谱，只能说是降低了风险。

PS：Cookie 分为两种，Session Cookie（在浏览器关闭后，就会失效，保存到内存里），Third-party Cookie（即只有到了 Exprie 时间后才会失效的 Cookie，这种 Cookie 会保存到本地）。

PS：另外如果网站返回 HTTP 头包含 P3P Header，那么将允许浏览器发送第三方 Cookie。

3. 加验证码

验证码，强制用户必须与应用进行交互，才能完成最终请求。在通常情况下，验证码能很好遏制 CSRF 攻击。但是出于用户体验考虑，网站不能给所有的操作都加上验证码。因此验证码只能作为一种辅助手段，不能作为主要解决方案。

4. Referer Check

Referer Check 在 Web 最常见的应用就是“防止图片盗链”。同理，Referer Check 也可以被用于检查请求是否来自合法的“源”（Referer 值是否是指定页面，或者网站的域），如果都不是，那么就极可能是 CSRF 攻击。

但是因为服务器并不是什么时候都能取到 Referer，所以也无法作为 CSRF 防御的主要手段。但是用 Referer Check 来监控 CSRF 攻击的发生，倒是一种可行的方法。

5. Anti CSRF Token

现在业界对 CSRF 的防御，一致的做法是使用一个 Token（Anti CSRF Token）。

例子：

1. 用户访问某个表单页面。

2. 服务端生成一个 Token，放在用户的 Session 中，或者浏览器的 Cookie 中。

3. 在页面表单附带上 Token 参数。

4. 用户提交请求后， 服务端验证表单中的 Token 是否与用户 Session（或 Cookies）中的 Token 一致，一致为合法请求，不是则非法请求。

这个 Token 的值必须是随机的，不可预测的。由于 Token 的存在，攻击者无法再构造一个带有合法 Token 的请求实施 CSRF 攻击。另外使用 Token 时应注意 Token 的保密性，尽量把敏感操作由 GET 改为 POST，以 form 或 AJAX 形式提交，避免 Token 泄露。

## 注意：

CSRF 的 Token 仅仅用于对抗 CSRF 攻击。当网站同时存在 XSS 漏洞时候，那这个方案也是空谈。所以 XSS 带来的问题，应该使用 XSS 的防御方案予以解决。

## 总结

CSRF 攻击是攻击者利用用户的身份操作用户帐户的一种攻击方式，通常使用 Anti CSRF Token 来防御 CSRF 攻击，同时要注意 Token 的保密性和随机性。

[crsf 详细知识](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)
