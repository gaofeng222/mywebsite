# 手写一个 promise

我们来过一遍 Promise/A+规范：

- 三种状态 pending| fulfilled(resolved) | rejected
- 当处于 pending 状态的时候，可以转移到 fulfilled(resolved)或者 rejected 状态
- 当处于 fulfilled(resolved)状态或者 rejected 状态的时候，就不可变。

必须有一个 then 异步执行方法，then 接受两个参数且必须返回一个 promise：

> // onFulfilled 用来接收 promise 成功的值  
> // onRejected 用来接收 promise 失败的原因  
> promise1=promise.then(onFulfilled, onRejected);

## 用法

```js
var promise = new Promise((resolve, reject) => {
  if (操作成功) {
    resolve(value)
  } else {
    reject(error)
  }
})
promise.then(
  function (value) {
    // success
  },
  function (value) {
    // failure
  }
)
```

### 手写实现

```js
function MyPromise(constructor) {
  let self = this

  self.status = 'pending'
  self.value = undefined
  self.reason = undefined

  function resolve(value) {
    if (self.status == 'pending') {
      self.value = value
      self.status = 'resolved'
    }
  }
  function reject(reason) {
    if (self.status == 'pending') {
      self.reason = reason
      self.status = 'rejected'
    }
  }
  try {
    constructor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

//test

let demo2 = new Promise((resolve, reject) => {
  resolve('hahaha---')
})

demo2.then((res) => {
  console.log(res, 'tessst')
})
```
