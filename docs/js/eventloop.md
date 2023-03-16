# Eventloop 的理解(事件循环)

## JS 是单线程的

也就是说它同时只能做一件事,它的主要作用是和用户互动，及操作 dom，就决定了它只能是单线程。多线程的话，一个线程在添加一个线程在删除，就乱了。

## 同步与异步

同步代码会立即放入 js 引擎的主线程执行，并原地等待结果
异步代码：先放入宿主环境（浏览器/node），不必原地等待结果，并不阻塞主线程继续往下执行，异步结果在将来执行

```js
//同步
console.log('test1')
console.log('test2')
//异步
console.log('test1')
setTimeout(() => {
  console.log(test2)
})
console.log('test3')
```

## 事件循环的过程

1.js 是单线程的，防止代码阻塞，我们把代码（任务）：分成同步和异步  
2.同步任务交给 js 引擎执行，异步代码交给宿主环境（浏览器/node）  
3.同步代码放入执行栈中，异步代码等待时机成熟送入任务队列排队  
4.执行栈执行完毕，会去任务队列看是否有异步任务，有就把异步任务里面的回调函数送到执行栈，反复循环查看执行，这个过程就是事件循环（Eventloop）。

## 宏任务和微任务

JS 把异步任务分为宏任务和微任务

宏任务是宿主（浏览器/node）发起，script/事件/网络请求/setTimeout/setInterval

微任务是 js 引擎发起的任务，promise
promise 本身是同步的，then/catch 的回调函数是异步的

原则就是执行完执行栈里面的同步任务，再去执行异步任务里面的微任务（promise.then/catch），执行完再执行异步里面的宏任务（setTimeout/setInterval）

async await 基于 promise，也是亦不为任务，async 是同步的，但是 await 之后的都是异步的，要等待执行完才执行

[视频讲解](https://www.bilibili.com/video/BV1Zg411z7cv/?spm_id_from=pageDriver&vd_source=5f704a73611cba40b8f8f7d423e9ee2a)  
[在线演示网站](http://www.jsv9000.app/)
