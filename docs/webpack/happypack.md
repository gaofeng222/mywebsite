# webpack 之 happypack

## 安装

```js
yarn add happypack
```

## 引入

```js
const Happypack = require('happypack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: 'happypack/loader?id=js'
      }
    ]
  }
}
```

## 插件使用

```js
new Happypack({
  id: 'js',
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
})
```

## 结果

```bash
yarn run v1.22.19
$ webpack --config webpack.config.js
Happy[js]: Version: 5.0.1. Threads: 3
Happy[js]: All set; signaling webpack to proceed.
Hash: 7bd536257dce403f405e
Version: webpack 4.41.6
Time: 3831ms
Built at: 2023/03/20 15:44:01
```

其他资源如 css 也是一样的原理
