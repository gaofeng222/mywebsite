# React Fiber 原理实现

## react16 之前的问题

react16 之前 dom 元素的更新采用递归遍历的方式来对比子节点。一旦进入到递归遍历，整个过程将不能被打断，如果 dom 树的层次比较深，整个对比过程将耗时较长。而 js 的运行和 dom 的渲染又是互斥的，所以很容易造成卡顿。

## Fiber

fiber 是 react16 采用的一种新的节点对比更新方法，是为了解决 react16 之前的问题而产生的。

## 核心思想

任务拆分，将任务才分成一个个小的任务
在浏览器空闲时间执行任务，避免长时间占用主线程
使用循环模拟递归，因为循环是可以中断的

## 实现思路

在 Fiber 方案中，为了实现任务的中断再继续，DOM 比对算法被分成了两部分：

构建 fiber，这个过程可以中断
提交 Commit，不可中断
初始渲染的过程：virtualDom --> fiber --> fiber[] --> Dom
Dom 更新操作：newFiber vs oldFiber --> fiber[] --> Dom

## Fiber 对象结构

```js
{
  type         节点类型 (元素, 文本, 组件)(具体的类型)
  props        节点属性
  stateNode    节点 DOM 对象 | 组件实例对象
  tag          节点标记 (对具体类型的分类 hostRoot || hostComponent || classComponent || functionComponent)
  effects      数组, 存储需要更改的 fiber 对象
  effectTag    当前 Fiber 要被执行的操作 (新增, 删除, 修改)
  parent       当前 Fiber 的父级 Fiber
  child        当前 Fiber 的子级 Fiber
  sibling      当前 Fiber 的下一个兄弟 Fiber
  alternate    Fiber 备份 fiber 比对时使用
}
```

hostRoot：根节点
hostComponent：非根节点
classComponent：类组件
functionComponent：函数组件
