# 移动端 H5 头部的各种参数配置

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0," />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>支付页面</title>
  <meta
    name="viewport"
    content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
  />
  <meta name="format-detection" content="telephone=no" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <!-- 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。 -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <!-- 当启动webapp功能时，显示手机信号、时间、电池的顶部导航栏的颜色。默认值为default（白色），可以定为black（黑色）和black-translucent（灰色半透明）。这个主要是根据实际的页面设计的主体色为搭配来进行设置。 -->
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <!-- 忽略页面中的数字识别为电话号码、email识别 -->
  <meta name="format-detection" content="telephone=no, email=no" />
  <!-- 启用360浏览器的极速模式(webkit) -->
  <meta name="renderer" content="webkit" />
  <!-- 避免IE使用兼容模式 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
  <meta name="HandheldFriendly" content="true" />
  <!-- 微软的老式浏览器 -->
  <meta name="MobileOptimized" content="320" />
  <!-- UC强制全屏 -->
  <meta name="full-screen" content="yes" />
  <!-- QQ强制全屏 -->
  <meta name="x5-fullscreen" content="true" />
  <!-- UC应用模式 -->
  <meta name="browsermode" content="application" />
  <!-- QQ应用模式 -->
  <meta name="x5-page-mode" content="app" />
  <!-- windows phone 点击无高光 -->
  <meta name="msapplication-tap-highlight" content="no" />
  <!-- 网页不会被缓存 -->
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Cache-Control" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <link rel="stylesheet" href="./css/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="./css/index.css" type="text/css" />
  <script>
    window.onload = function () {
      var html = document.documentElement
      var hWidth = html.getBoundingClientRect().width
      console.log(hWidth)
      html.style.fontSize = hWidth / 16 + 'px'
      if (hWidth > 750) {
        hWidth = 750
      }
    }
  </script>
</head>
```
