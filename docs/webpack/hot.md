# webpack 之热更新

所谓热更新就是增量更新，不是页面全局刷新，比较显目的区别就是浏览器 ico 的 logo 那里有没有转圈，页面闪现了一次

## 开启更新

```js
//引入插件，是webpack的内置插件
const webpack = require('webpack')
...
plugins:[
    new webpack.HotModuleReplacementPlugin(), //开启热更新
    new webpack.NamedModulesPlugin() //更新的模块名
],
devServer: {
    port: 5622,
    progress: true,
    open: true,
    compress: true,
    inline: true,
    hot: true  //开启
  }
...
```

## 入口文件文件里面添加代码

```js
import str from './source'

if (module.hot) {
  module.hot.accept('./source', () => {
    console.log('文件更新了')
    let str = require('./source') //获取更新之后的内容
    console.log(str.default)
  })
}
```

## 结果

```bash
[WDS] App hot update...
log.js:24 [HMR] Checking for updates on the server...
source.js:2 source
index.js:9 文件更新了
index.js:11 gaofeng444
log.js:24 [HMR] Updated modules:
log.js:24 [HMR] - ./src/source.js
log.js:24 [HMR] App is up to date.
```
