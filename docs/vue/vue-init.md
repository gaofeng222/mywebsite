# 源码解读 —— Vue 初始化过程

入口文件地址：src\core\instance\index.js

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue(options) {
  //设计模式中的，安全类模式
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 定义 Vue.prototype._init 方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

## beforeCreate 之前做了哪些？

```js
...
export function initMixin (Vue: Class<Component>) {
    ...
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    ...
}
...
```
