# 函数式编程 -- 手写 apply

apply 函数和 call 函数类似，唯一不同的是要求我们传递参数时候，以数组的形式传入，第一个参数依旧是我们需要绑定的 this 的值，注意调用 apply 函数时候，原函数也会立即执行。

## 手写实现

```js
Function.prototype.myapply = function (context, args) {
  context = context != null && context != undefined ? context : window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn() ? context.fn() : '暂无返回值'
  }
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

let demo1 = add.myapply(obj, [obj.a, obj.b, obj.c])
console.log(demo1)  //6
let demo2 = add.myapply(obj)
console.log(demo2)  '暂无返回值'
```
