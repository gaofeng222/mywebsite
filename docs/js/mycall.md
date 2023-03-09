# 函数式编程--手写 mycall

call 函数是我们使用的比较多的函数，我们可以利用它来绑定 this 的值，call 函数调用时候第一个参数要求我们传入要绑定的 this，后面的参数要求我们传入函数的参数以逗号分隔，注意在调用 call 函数时候，原函数会直接执行一次。

## 手写实现

```js
Function.prototype.mycall = function (context, ...args) {
  context.fn = this //调用这个方法的函数就是this
  const result = context.fn(...args) //执行这个函数并传入参数
  delete context.fn
  return result
}

//test
let obj = {
  name: 'gaofeng',
  a: 1,
  b: 2,
  c: 3
}

function add(a, b, c) {
  return a + b + c
}

let demo1 = add.mycall(obj, obj.a, obj.b, obj.c)
console.log(demo1)
//  6
```
