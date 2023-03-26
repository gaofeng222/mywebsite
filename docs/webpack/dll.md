# webpack 之 dll 配置

## 分析

主要思路就是把 vue，vue-router 这种库单独抽离处理，不参与最终的构建，生成一个 manifest.json 文件，形成一个映射，最后注入到 index.html

## 配置方法

新增一个配置文件`webpack.dll.js`，专门抽离第三方库

```js
const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    vue: ['vue'] //这里把需要单独抽离的全部这样罗列出来
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]', //与声明的library保持一致
      path: resolve(__dirname, 'dll/manifest.json') //最终生成的映射文件
    })
  ]
}
```

package.json 里面新增命令

```js
"scripts": {
    "build": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server",
    "build:dll": "webpack --config webpack.dll.js"  //
  },

```

运行命令 `npm run build:dll`，根目录多了个文件夹

```bash
-- dll
    manifest.json
    vue.js
```

主配置文件`webpack.config.js`

```js
+ const webpack = require('webpack')
+ const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')



module.exports = {
    plugins:[
     +   new webpack.DllReferencePlugin({
     +       manifest: path.resolve(__dirname, 'dll/manifest.json')
     +   }),
     +   new AddAssetHtmlPlugin({
     +       filepath: path.resolve(__dirname, 'dll/vue.js')
     +   })
    ]
}
```

## 最终打包结果

```bash
PS E:\work\srwebpack\hot> yarn build:dll
yarn run v1.22.19
$ webpack --config webpack.dll.js
Hash: 06d06b0603e59a5c68cc
Version: webpack 4.41.6
Time: 547ms
Built at: 2023/03/21 10:20:12
 Asset     Size  Chunks             Chunk Names
vue.js  124 KiB       0  [emitted]  vue
Entrypoint vue = vue.js
[4] dll vue 12 bytes {0} [built]
[6] (webpack)/buildin/global.js 472 bytes {0} [built]
    + 5 hidden modules
Done in 2.68s.


PS E:\work\srwebpack\hot> yarn build
yarn run v1.22.19
$ webpack --config webpack.config.js
Happy[js]: Version: 5.0.1. Threads: 3
Happy[js]: All set; signaling webpack to proceed.
Hash: 2c9172c8ad8aba967fd6
Version: webpack 4.41.6
Time: 3371ms
Built at: 2023/03/21 10:21:04
     Asset       Size  Chunks             Chunk Names
 bundle.js   1.38 KiB       0  [emitted]  main
index.html  340 bytes          [emitted]
    vue.js    124 KiB          [emitted]
Entrypoint main = bundle.js
[0] delegated ./node_modules/vue/dist/vue.runtime.esm-bundler.js from dll-reference vue_06d06b0603e59a5c68cc 42 bytes {0} [built]
[1] external "vue_06d06b0603e59a5c68cc" 42 bytes {0} [built]
[2] ./src/index.js + 3 modules 1.23 KiB {0} [built]
    | ./src/index.js 107 bytes [built]
PS E:\work\srwebpack\hot> yarn build
yarn run v1.22.19
$ webpack --config webpack.config.js
Happy[js]: Version: 5.0.1. Threads: 3
Happy[js]: All set; signaling webpack to proceed.
Hash: 244a5629b8ee7d17bfd4
Version: webpack 4.41.6
Time: 3226ms
Built at: 2023/03/21 10:21:28
     Asset       Size  Chunks             Chunk Names
 bundle.js   1.38 KiB       0  [emitted]  main
index.html  340 bytes          [emitted]
    vue.js    124 KiB          [emitted]
Entrypoint main = bundle.js
[0] delegated ./node_modules/vue/dist/vue.runtime.esm-bundler.js from dll-reference vue_06d06b0603e59a5c68cc 42 bytes {0} [built]
[1] external "vue_06d06b0603e59a5c68cc" 42 bytes {0} [built]
[2] ./src/index.js + 3 modules 1.23 KiB {0} [built]
    | ./src/index.js 107 bytes [built]
    | ./src/views/App.vue 183 bytes [built]
    | ./src/views/App.vue?vue&type=script&setup=true&lang=js 330 bytes [built]
    | ./node_modules/happypack/loader.js?id=js!./node_modules/vue-loader/dist??ref--1!./src/views/App.vue?vue&type=script&setup=true&lang=js 636 bytes [built]
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [0] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html 528 bytes {0} [built]
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 1 hidden module
Done in 5.16s.
```

dist 包里面的 index.html，已经把 vue 文件自动引入了...

```html
<!DOCTYPE html>
<html lang=en><head><meta charset=UTF-8>
<meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">
<title>Document</title>
</head>
<body><div id=app></div>
<script type=text/javascript src=vue.js></script><script type=text/javascript src=bundle.js></script>
</body></html>
```
