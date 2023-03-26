# vue3 读书笔记之命令式与声明式

## 概念

jQuery 就是典型的命令式框架。命令式框架的一大特点就是关
注过程。

与命令式框架更加关注过程不同，声明式框架更加关注结果。比如 Vuejs,reactjs 等

**Vue.js 帮我们封装了过程。因此，我们能够猜到 Vue.js 的内部实现一定是命令式的，而暴露给用户的却更加声明式。**

## 性能与可维护性的权衡

结论：**声明式代码的性能不优于命令式代码的性能。**

声明式代码会比命令式代码多出找出差异的性能消耗，因此最理想的情况是，当找出差异的性能消耗为 0 时，声明式代码与命令式代码的性能相同，但是无法做到超越，毕竟框架本身就是封装了命令式代码才实现了面向用户的声明式。

## 虚拟 DOM 的性能到底如何

而所谓的虚拟 DOM，就是为了最小化找出差异这一步的性能消耗而出现的。

- 虚拟 DOM 要解决的问题：

能够保证应用程序的性能下限，让应用程序的性能不至于太差，甚至想办法逼近命令式代码的性能

- 纯 js 操作 dom

innerHTML 创建页面的性能：HTML 字符串拼接的计算量 + innerHTML 的 DOM
计算量。

- 虚拟 DOM 创

建页面的过程分为两步：

第一步是创建 JavaScript 对象，这个对象可以理解为真实 DOM 的描述；

第二步是递归地遍历虚拟 DOM 树并创建真实 DOM。我们同样可以用一个公式来表达：创建 JavaScript 对象的计算量 + 创建真实 DOM 的计算量。

使用 innerHTML 更新页面的过程是重新构建 HTML 字符串，再重新设置 DOM 元素的 innerHTML 属性，这其实是在说，哪怕我们只更改了一个文字，也要重新设置 innerHTML 属性。而重新设置 innerHTML 属性就等价于销毁所有旧的 DOM 元素，再全量创建新的 DOM 元素。

再来看虚拟 DOM 是如何更新页面的。它需要重新创建 JavaScript 对象（虚拟 DOM 树），然后比较新旧虚拟 DOM，找到变化的元素并更新它

在更新页面时，虚拟 DOM 在 JavaScript 层面的运算要比创建页面时多出一个 Diff 的性能消耗，然而它毕竟也是 JavaScript 层面的运算，所以不会产生数量级的差异。再观察 DOM 层面的运算，可以发现虚拟 DOM 在更新页面时只会更新必要的元素，但 innerHTML 需要全量更新。这时虚拟 DOM 的优势就体现出来了。

## 运行时和编译时

- 概念

**纯运行时**

```js
function render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (Array.isArray(obj.children)) {
    obj.children.forEach((ele) => render(ele, el))
  }
  root.appendChild(el)
}
//调用
const obj = {
  tag: 'div',
  children: [{ tag: 'span', children: 'hello world' }]
}
// 渲染到 body 下
render(obj, document.body)
```

这就是一个纯运行时的代码,只能手写树型结构的数据对象，不能直接写 html 结构

**运行时 + 编译时**

编写了 Compiler 的程序，它的作用就是把 HTML 字符串编译成树型结构的数据对象，分别调用 Compiler 函数和 Render 函数：

```js
const html = `
<div>
<span>hello world</span>
</div>
`
// 调用 Compiler 编译得到树型结构的数据对象
const obj = Compiler(html)
// 再调用 Render 进行渲染
Render(obj, document.body)
```

**纯编译时**

编译器可以把 HTML 字符串编译成数据对象，也能直接编译成命令式代码

只需要一个 Compiler 函数就可以了， Render 不需要了，不支持任何
运行时内容，用户的代码通过编译器编译后才能运行

**三者对比**

纯运行时：不能分析用户的输入内容，

纯编译：代表时 svelte ，它的性能达不到理论高度

运行时+ 编译时 ：分析用户剔红的内容，提取不会变的内容交给 rener 方法，就可以做进一步的优化
