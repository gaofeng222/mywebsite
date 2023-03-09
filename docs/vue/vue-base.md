# Vue 基础必会

## MVC 架构

`MVC` 指的是 `Model-View-Controller`，分别代表着模型层、视图层、控制器。

`Model`（模型层），主要管理的是业务模型的数据和处理数据的逻辑。

`View`（视图层）主要是接收用户的交互请求并展示数据信息给用户。

`Controller`（控制器层）主要担任的是 Model 和 View 之间的桥梁，用于控制程序的流程。Controller 负责确保 View 可以访问到需要显示的 Model 对象的数据，View 接收到用户的交互请求之后，会将请求转发给控制器，控制器解析请求之后，会交给对应的 Model 处理。

## MVVM 模型

MVVM，即是 `Model-View-ViewModel` 的简写，其本质是 `MVC` 模型的升级版。其中 `Model` 代表数据模型，`View` 代表看到的页面，`ViewModel` 是 `View` 和 `Model` 之间的桥梁，数据会绑定到 `ViewModel` 层并自动将数据渲染到页面中，视图变化的时候会通知 `ViewModel` 层更新数据。以前是通过操作 `DOM` 来更新视图，现在是`数据驱动视图`。

## MVC 和 MVVM 的区别

在已经有了 MVC 架构的时候，为什么还要衍生出 MVVM 架构，这是因为 View 中很多控件的数据类型和 Model 中的属性不相同，例如 Model 中的时间数据可能是一串数字，View 想要展示成日期的格式，这就需要一种转化，这个转换如果放在 View 不合适，因为 View 中不应该出现逻辑代码，放在 Model 中也不合适，这回导致 Model 臃肿庞大，因为这种问题的存在诞生了 ViewModel，这一层可以帮助 View 转化为相应的数据给 Model 或者从 Model 中转化成 View 可以显示的内容。

## Vue 的生命周期

Vue 的生命周期可以分为 8 个阶段，创建前后，挂载前后，更新前后以及销毁前后，以及一些特殊场景的生命周期。V3 新增了 3 个用于调试和服务端渲染的场景

|      Vue2       | Vue3(optional api) | Vue3(composition api) |                         描述                          |
| :-------------: | :----------------: | :-------------------: | :---------------------------------------------------: |
| `beforeCreate`  |   `beforeCreate`   |       `setup()`       |   创建前，此时 data 和 methods 的数据都还没有初始化   |
|    `created`    |     `created`      |      `created  `      | 创建后，data 中有值，尚未挂载，可以进行一些 Ajax 请求 |
|  `beforeMount`  |   `beforeMount`    |    `onBeforeMount`    |         挂载前，会找到虚拟 DOM，编译成 Render         |
|    `mounted`    |     `mounted`      |      `onMounted`      |   挂载后，DOM 已创建，可用于获取访问数据和 DOM 元素   |
| `beforeUpdate`  |   `beforeUpdate`   |   `onBeforeUpdate`    |           更新前，可用于获取更新前各种状态            |
|    `updated`    |     `updated`      |      `onUpdated`      |               更新后，所有状态已是最新                |
| `beforeDestroy` |  `beforeUnmount`   |   `onBeforeUnmount`   |         销毁前，可用于一些定时器或订阅的取消          |
|   `destroyed`   |    `unmounted`     |     `onUnmounted`     |         销毁后，可用于一些定时器或订阅的取消          |
|  `activated `   |    ` activated`    |    `onActivated `     |             `keep-alive` 缓存的组件激活时             |
|  `deactivated`  |   `deactivated`    |    `onDeactivated`    |             `keep-alive` 缓存的组件停用时             |
| `errorCaptured` |  `errorCaptured`   |  `onErrorCaptured `   |           捕获一个来自子孙组件的错误时调 用           |
|        —        |  `renderTracked `  |   `onRenderTracked`   |           调试钩子，响应式依赖被收集时调用            |
|        —        | `renderTriggered`  |  `onRenderTriggered`  |           调试钩子，响应式依赖被触发时调 用           |
|        —        |  `serverPrefetch`  |  `onServerPrefetch`   |              组件实例在服务器上被渲染前               |

## 父子组件创建的先后顺序

- 挂载阶段 父 `beforeCreate` -> 父 `created` -> 父 `beforeMount` -> 子 `beforeCreate` -> 子 `created` -> 子 `beforeMounte`-> 子 `mounted` -> 父 `mounted`

- 更新阶段 父 `beforeUpdate` -> 子 `beforeUpdate` -> 子 `updated` -> 父 `updated`

- 销毁阶段：父 `beforeDestroy` -> 子 `beforeDestroy` -> 子 `destroyed` -> 父 `destroyed`

## Vue.$nextTick

**在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。**

nextTick 是 Vue 提供的一个全局 API，由于 Vue 的异步更新策略，导致我们对数据修改后不会直接体现在 DOM 上，此时如果想要立即获取更新后的 DOM 状态，就需要借助该方法。
Vue 在更新  DOM  时是异步执行的。

当数据发生变化，Vue 将开启一个异步更新队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入队列一次。
这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。nextTick 方法会在队列中加入一个回调函数，确保该函数在前面的 DOM 操作完成后才调用。

**使用场景：**

如果想要在修改数据后立刻得到更新后的 DOM 结构，可以使用 Vue.nextTick()
在 created 生命周期中进行 DOM 操作

## Vue 的模版编译原理

Vue 中有个独特的编译器模块，称为 `compiler`，它的主要作用是将用户编写的 `template` 编译为 js 中可执行的 `render` 函数。
在 Vue 中，编译器会先对 `template` 进行解析，这一步称为 `parse`，结束之后得到一个 JS 对象，称之为抽象语法树 `AST`；
然后是对 AST 进行深加工的转换过程，这一步称为 `transform`，最后将前面得到的 AST 生成 JS 代码，也就是 `render` 函数

## Vue 实例挂载过程中发生了什么？

挂载过程指的是 `app.mount()`过程，这是一个初始化过程，整体上做了两件事情：
**初始化和建立更新机制**。

初始化会创建组件实例、初始化组件状态、创建各种响应式数据。

建立更新机制这一步会立即执行一次组件的更新函数，这会首次执行组件渲染函数并执行 `patch` 将 `vnode` 转换为 dom；
同时首次执行渲染函数会创建它内部响应式数据和组件更新函数之间的依赖关系，这使得以后数据发生变化时会执行对应的更新函数。

## Vue 的响应式原理

Vue2 中的数据响应式会根据数据类型做不同的处理。如果是对象，则通过 `Object.defineProperty(obj,key,descriptor)`拦截对象属性访问，当数据被访问或改变时，感知并作出反应；如果是数组，则通过覆盖数组原型的方法，扩展它的 7 个变更方法（`push、pop、shift、unshift、splice、sort、reverse`），使这些方法可以额外的做更新通知，从而做出响应。

- 缺点：

* 初始化时的递归遍历会造成性能损失；
* 通知更新过程需要维护大量 dep 实例和 watcher 实例，额外占用内存较多；
* 新增或删除对象属性无法拦截，需要通过 Vue.set 及 delete 这样的 API 才能生效；
* 对于 ES6 中新产生的 Map、Set 这些数据结构不支持。

Vue3 中利用 ES6 的`Proxy`机制代理需要响应化的数据。可以同时支持对象和数组，动态属性增、删都可以拦截，新增数据结构均支持，对象嵌套属性运行时递归，用到时才代理，也不需要维护特别多的依赖关系，性能取得很大进步。

## 虚拟 DOM

**概念：**

虚拟 DOM，顾名思义就是虚拟的 DOM 对象，它本身就是一个 JS 对象，只不过是通过不同的属性去描述一个视图结构。

**虚拟 DOM 的好处：**

(1) 性能提升
直接操作 DOM 是有限制的，一个真实元素上有很多属性，如果直接对其进行操作，同时会对很多额外的属性内容进行了操作，这是没有必要的。如果将这些操作转移到 JS 对象上，就会简单很多。另外，操作 DOM 的代价是比较昂贵的，频繁的操作 DOM 容易引起页面的重绘和回流。如果通过抽象 VNode 进行中间处理，可以有效减少直接操作 DOM 次数，从而减少页面的重绘和回流。

(2) 方便跨平台实现
同一 VNode 节点可以渲染成不同平台上对应的内容，比如：渲染在浏览器是 DOM 元素节点，渲染在 Native（iOS、Android）变为对应的控件。Vue 3 中允许开发者基于 VNode 实现自定义渲染器（renderer），以便于针对不同平台进行渲染。

**结构：**

没有统一的标准，一般包括 `tag、props、children` 三项。  
tag：必选。就是标签，也可以是组件，或者函数。  
props：非必选。就是这个标签上的属性和方法。  
children：非必选。就是这个标签的内容或者子节点。如果是文本节点就是字符串；如果有子节点就是数组。换句话说，如果判断 children 是字符串的话，就表示一定是文本节点，这个节点肯定没有子元素。

## diff 算法

**概念：**

diff 算法是一种对比算法，通过对比旧的虚拟 DOM 和新的虚拟 DOM，得出是哪个虚拟节点发生了改变，找出这个虚拟节点并只更新这个虚拟节点所对应的真实节点，而不用更新其他未发生改变的节点，实现精准地更新真实 DOM，进而提高效率。

**对比方式：**

diff 算法的整体策略是：深度优先，同层比较。比较只会在同层级进行, 不会跨层级比较；比较的过程中，循环从两边向中间收拢。

- 首先判断两个节点的 tag 是否相同，不同则删除该节点重新创建节点进行替换。
- tag 相同时，先替换属性，然后对比子元素，分为以下几种情况：

  - 新旧节点都有子元素时，采用双指针方式进行对比。新旧头尾指针进行比较，循环向中间靠拢，根据情况调用 patchVnode 进行 patch 重复流程、调用 createElem 创建一个新节点，从哈希表寻找 key 一致的 VNode 节点再分情况操作。

  - 新节点有子元素，旧节点没有子元素，则将子元素虚拟节点转化成真实节点插入即可。

  - 新节点没有子元素，旧节点有子元素，则清空子元素，并设置为新节点的文本内容。

  - 新旧节点都没有子元素时，即都为文本节点，则直接对比文本内容，不同则更新。

## Vue 中 key 的作用？

**key 的作用主要是为了更加高效的更新虚拟 DOM。**

Vue 判断两个节点是否相同时，主要是判断两者的 key 和元素类型 tag。因此，如果不设置 key
，它的值就是 undefined，则可能永远认为这是两个不相同的节点，只能去做更新操作，将造成大量的 DOM 更新操作。

## 为什么组件中的 data 是一个函数？

在 `new Vue()` 中，可以是函数也可以是对象，因为根实例只有一个，不会产生数据污染。

在组件中，data 必须为函数，目的是为了防止多个组件实例对象之间共用一个 data，产生数据污染；而采用函数的形式，initData 时会将其作为工厂函数都会返回全新的 data 对象。

## Vue 中组件间的通信方式？

- 父子组件通信：

  父向子传递数据是通过 props，子向父是通过$emit触发事件；     
  通过父链/子链也可以通信（$parent/$children）；        
  ref也可以访问组件实例；    
  provide/inject；$attrs/$listeners。

- 兄弟组件通信：
  全局事件总线 EventBus、Vuex。

- 跨层级组件通信：
  全局事件总线 EventBus、Vuex、provide/inject。

##页面刷新后 Vuex 状态丢失怎么解决？##

`Vuex` 只是在内存中保存状态，刷新后就会丢失，如果要持久化就需要保存起来。
`localStorage` 就很合适，提交 `mutation` 的时候同时存入 `localStorage`，在 store 中把值取出来作为 state 的初始值即可。
也可以使用第三方插件，推荐使用 `vuex-persist` 插件，它是为 Vuex 持久化储存而生的一个插件，不需要你手动存取 storage，而是直接将状态保存至 cookie 或者 localStorage 中。

## 关于 Vue SSR 的理解？

`SSR` 即服务端渲染（`Server Side Render`），就是将 Vue 在客户端把标签渲染成 html 的工作放在服务端完成，然后再把 html 直接返回给客户端。

**优点：**

有着更好的 SEO，并且首屏加载速度更快。

**缺点：**

开发条件会受限制，服务器端渲染只支持 beforeCreate 和 created 两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于 Node.js 的运行环境。服务器会有更大的负载需求。

## 了解哪些 Vue 的性能优化方法？

- 路由懒加载。有效拆分应用大小，访问时才异步加载。
- keep-alive 缓存页面。避免重复创建组件实例，且能保留缓存组件状态。
- v-for 遍历避免同时使用 v-if。实际上在 Vue 3 中已经是一个错误用法了。
- 长列表性能优化，可采用虚拟列表。
- v-once。不再变化的数据使用 v-once。
- 事件销毁。组件销毁后把全局变量和定时器销毁。
- 图片懒加载。
- 第三方插件按需引入。
- 子组件分割。较重的状态组件适合拆分。
- 服务端渲染。

## Vue 和 React 的区别

**一、核心思想不同**

- Vue 的核心思想是尽可能的降低前端开发的门槛，是一个灵活易用的渐进式双向绑定的 MVVM 框架。

- React 的核心思想是声明式渲染和组件化、单向数据流，React 既不属于 MVC 也不属于 MVVM 架构。

> React1：声明式是什么意思？  
> 声明式与之相对应的是命令式，命令式指的是通过 DOM 操作一步步把网页变成想要的样子，而声明式则是只需要通过状态去形容最后的网页长什么样子即可。

> React2：组件化是什么意思？  
> 组件化指的是尽可能的将页面拆分成一个个较小的、可以复用的组件，这样让我们的代码更加方便组织和管理，并且拓展性页更强。

> React3：如何理解 React 的单向数据流？  
> React 的单向数据流指的是数据主要从父节点通过 props 传递到子节点，如果顶层某个 props 改变了，React 会重新渲染所有的子节点，但是单向数据流并非单向绑定，React 想要从一个组件去更新另一个组件的状态，需要进行状态提升，即将状态提升到他们最近的祖先组件中，触发父组件的状态变更，从而影响另一个组件的显示。单向数据流的好处是能够保证状态改变的可追溯性，假如，父组件维护了一个状态，子组件如果能够随意更改父组件的状态，那么各组件的状态改变就会变得难以追溯。

**二、组件写法上不同**

- Vue 的组件写法是通过 template 的单文件组件格式。

- React 的组件写法是 JSX+inline style，也就是吧 HTML 和 CSS 全部写进
  JavaScript 中。

**三、Diff 算法不同**

Diff 算法前置知识：虚拟 DOM

虚拟 Dom，其实很简单，就是一个用来描述真实 Dom 的对象

它有六个属性，sel 表示当前节点标签名，data 内是节点的属性，children 表示当前节点的其他子标签节点，elm 表示当前虚拟节点对应的真实节点（这里暂时没有），key 即为当前节点的 key，text 表示当前节点下的文本，结构类似这样。

```js
let vnode = {
  sel: 'ul',
  data: {},
  children: [
    {
      sel: 'li',
      data: { class: 'item' },
      text: 'son1'
    },
    {
      sel: 'li',
      data: { class: 'item' },
      text: 'son2'
    }
  ],
  elm: undefined,
  key: undefined,
  text: undefined
}
```

参考链接:[2023 前端面试系列-- Vue 篇](https://juejin.cn/post/7191325434486161467)
