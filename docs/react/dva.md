# dva 开发的坑

## 注意事项

1. antd5 暂时不兼容，按需引入 antd 会出现找不到 css 的报错

2. yarn 安装的 node_modules 会又很多 bug,推荐使用 npm 安装

3.参考版本依赖

```bash
{
  "private": true,
  "scripts": {
    "start": "roadhog server",
    "build": "roadhog build",
    "lint": "eslint --ext .js src test",
    "precommit": "npm run lint"
  },
  "dependencies": {
    "antd": "4.24.7",
    "babel-plugin-import": "^1.13.6",
    "dva": "^2.4.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  },
  "devDependencies": {
    "babel-plugin-dva-hmr": "^0.3.2",
    "eslint": "^4.14.0",
    "eslint-config-umi": "^0.1.1",
    "eslint-plugin-flowtype": "^2.34.1",
    "eslint-plugin-import": "^2.6.0",
    "eslint-plugin-jsx-a11y": "^5.1.1",
    "eslint-plugin-react": "^7.1.0",
    "husky": "^0.12.0",
    "redbox-react": "^1.4.3",
    "roadhog": "^2.5.0-beta.4"
  }
}

```

.webpackrc.js 文件配置 antd4.x 的按需引入

```bash
import path from "path";

function resolve(dist) {
  return path.resolve(__dirname, dist);
}

export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  ],
  alias: {
    comp: resolve("src/components"),
    routes: resolve("src/routes"),
  },
};
```

## 多个 model 的导入方法

1. 方案一

```js
//index.js
import dva from 'dva'
import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model   有多少个写多少个

app.model(require('./models/example').default)
app.model(require('./models/a').default)
app.model(require('./models/b').default)
app.model(require('./models/c').default)
app.model(require('./models/d').default)
app.model(require('./models/e').default)
app.model(require('./models/f').default)
app.model(require('./models/g').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
```

2. 方案二

```js
const context = require.context('./', false, /\.js$/) //false是不遍历文件夹

const files = context
  .filter((item) => item != './index.js')
  .map((key) => context(key))

export default files
```

/index.js 里面更优雅的引入

```js
require('./models').default.foreach((key) => app.model(key.default))
```

官网链接：[组件通信的例子 #步骤 1](https://dvajs.com/guide/introduce-class.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5)
