# 函数式编程--手写 mybind

会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

## 手写实现

```js
//版本1
Function.prototype.mybind = function (context) {
  if (typeof this != 'function') {
    throw new Error('not a function')
  }
  let fn = this

  let args = [...arguments].slice(1)

  let result = function () {
    return fn.apply(
      this instanceof result ? this : context,
      args.concat(...arguments)
    )
  }

  function tmp() {}
  tmp.prototype = this.prototype
  result.prototype = new tmp()

  return result
}
// test
let obj = {
  name: 'gaofeng',
  a: 1,
  b: 2,
  c: 3
}

function add(a, b, c) {
  return a + b + c
}

let demo1 = add.mybind(obj, obj.a, obj.b, obj.c)
console.log(demo1()) //6
```

```js
//版本2

Function.prototype.bind2 = function (context) {
  let _self = this
  return function () {
    return _self.apply(context, arguments)
  }
}

function showName() {
  console.log(this.name)
}
let demo3 = showName.bind2(obj)
demo3()
```
