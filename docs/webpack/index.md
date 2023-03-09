# webpack 必会

## Webpack 的热更新原理

`Webpack` 的热更新又称热替换（`Hot Module Replacement`），缩写为`HMR`。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

HMR 的核心就是客户端从服务端拉去更新后的文件，准确地说是 `chunk diff` (`chunk` 需要更新的部分)，实际上 `WDS` 与浏览器之间维护了一个 `Websocket`，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 `hash`，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 `Ajax` 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 `jsonp` 请求获取该 chunk 的增量更新。

后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像 `react-hot-loader` 和 `vue-loader` 都是借助这些 API 实现 HMR。

## Loader 和 Plugin 的区别

1. Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

2. Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

3. Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

4. Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## Webpack 构建过程

1. 从 `entry` 里配置的 `module` 开始递归解析 `entry` 依赖的所有 `module`

2. 每找到一个 `module`，就会根据配置的 `loader` 去找对应的转换规则

3. 对 `module` 进行转换后，再解析出当前 `module` 依赖的 `module`

4. 这些模块会以 `entry` 为单位分组，一个 `entry` 和其所有依赖的 `module` 被分到一个组 Chunk

5. 最后 `Webpack` 会把所有 `Chunk` 转换成文件输出在整个流程中 `Webpack` 会在恰当的时机执行 `plugin 里定义的逻辑

## 如何优化 Webpack 的构建速度

**1. 使用高版本的 Webpack 和 Node.js**

**2. 压缩代码**

- 1). 通过 uglifyjs-webpack-plugin 压缩 JS 代码

- 2). 通过 mini-css-extract-plugin 提取 chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。

**3. 多线程/多进程构建：thread-loader, HappyPack**

**4. 压缩图片: image-webpack-loader**

**5. 缩小打包作用域**

- 1). exclude/include (确定 loader 规则范围)

- 2). resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)

- 3). resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)

- 4). resolve.extensions 尽可能减少后缀尝试的可能性

- 5). noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)

- 6). ignorePlugin (完全排除模块)

- 7). 合理使用 alias

6. 提取页面公共资源, 基础包分离

1). 使用
html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中。

2). 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4 内置) ，替代了 CommonsChunkPlugin 插件。

**7. 充分利用缓存提升二次构建速度：**

babel-loader 开启缓存

terser-webpack-plugin 开启缓存

使用 cache-loader 或者
hard-source-webpack-plugin

**8. Tree shaking**

打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的 bundle 中去掉(只能对 ES6 Modlue 生效) 开发中尽可能使用 ES6 Module 的模块，提高 tree shaking 效率

禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking

使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码

purgecss-webpack-plugin 和 mini-css-extract-plugin 配合使用(建议)

**9. Scope hoisting**

构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当地重命名一些变量以防止变量名冲突。
