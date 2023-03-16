# 点击劫持（ClickJacking）

点击劫持（ClickJacking）是一种视觉上的欺骗手段。大概有两种方式:

- 一是攻击者使用一个透明的 iframe，覆盖在一个网页上，然后诱使用户在该页面上进行操作，此时用户将在不知情的情况下点击透明的 iframe 页面；
- 二是攻击者使用一张图片覆盖在网页，遮挡网页原有位置的含义

## 常见方式

```html
<!DOCTYPE html>
<html>
  <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  <head>
    <title>点击劫持</title>
    <style>
      html,
      body,
      iframe {
        display: block;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
      }
      iframe {
        opacity: 0;
        filter: alpha(opacity=0);
        position: absolute;
        z-index: 2;
      }
      button {
        position: absolute;
        top: 315px;
        left: 462px;
        z-index: 1;
        width: 72px;
        height: 26px;
      }
    </style>
  </head>
  <body>
    那些不能说的秘密
    <button>查看详情</button>
    <iframe src="http://tieba.baidu.com/f?kw=%C3%C0%C5%AE"></iframe>
  </body>
</html>
```

## 解决办法

使用一个 HTTP 头——X-Frame-Options。X-Frame-Options 可以说是为了解决 ClickJacking 而生的，它有三个可选的值：

- DENY：浏览器会拒绝当前页面加载任何 frame 页面；

- SAMEORIGIN：frame 页面的地址只能为同源域名下的页面；

- ALLOW-FROM origin：允许 frame 加载的页面地址；

PS：浏览器支持情况：IE8+、Opera10+、Safari4+、Chrome4.1.249.1042+、Firefox3.6.9。

## nginx 配置：

```bash
add_header X-Frame-Options SAMEORIGIN;
```

## 图片覆盖

图片覆盖攻击（Cross Site Image Overlaying），攻击者使用一张或多张图片，利用图片的 style 或者能够控制的 CSS，将图片覆盖在网页上，形成点击劫持。当然图片本身所带的信息可能就带有欺骗的含义，这样不需要用户点击，也能达到欺骗的目的。

PS：这种攻击很容易出现在网站本身的页面。

在可以输入 HTML 内容的地方加上一张图片，只不过将图片覆盖在指定的位置。

```html
<a href="http://tieba.baidu.com/f?kw=%C3%C0%C5%AE">
  <img src="XXXXXX" style="position:absolute;top:90px;left:320px;" />
</a>
```

## 解决办法

在防御图片覆盖攻击时，需要检查用户提交的 HTML 代码中，img 标签的 style
属性是否可能导致浮出。
