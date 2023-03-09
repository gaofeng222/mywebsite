# 异步

所谓"异步"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段,比如，有一个任务是读取文件进行处理，异步的执行过程就是下面这样。

## 判断一个参数是否是字符串/数组

```js
function isType(type) {
  return function (param) {
    return Object.prototype.toString.call(param) == '[objec ' + type + ']'
  }
}

//let demo1 = isType('Array')([1, 2, 3, 4])

console.log(demo1)

//改进版
function isType2() {
  if (!arguments.length) throw new Error('参数不能为空')
  return (
    Object.prototype.toString.call(arguments[1]) ===
    '[object ' + arguments[0] + ']'
  )
}

let demo2 = isType2('String', 'abc')
let demo3 = isType2('Array', 'abc')
console.log(demo2)
console.log(demo3)

//true
// true
//false
```

## 指定一个函数被调用多少次才真正执行

```js
function after(times, fn) {
  let count = 0
  return function () {
    if (count++ == times) {
      fn()
    }
  }
}

let newEat = after(3, eat)

newEat()
newEat()
newEat()
newEat()   才打印
```

## 异步编程的语法目标，就是怎样让它更像同步编程,有以下几种

- 回调函数实现

  - 问题:不能 return

  ```js
  let fs = require('fs')
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) return
    console.log(data, 'data')
  })
  ```

  - 异步代码时 try catch 不再生效

    - 因为这个回调函数被存放了起来，直到下一个事件环的时候才会取出,try 只能捕获当前循环内的异常，对 callback 异步无能为力。Node 在处理异常有一个约定，将异常作为回调的第一个实参传回，如果为空表示没有出错。

- 事件监听
- 发布订阅
- Promise/A+ 和生成器函数
- async/await

## 异常处理

```js
let async = function (callback) {
  try {
    setTimeout(function () {
      if (success) callback(null)
      else callback('错误')
    }, 1000)
  } catch (e) {
    console.log('捕获错误', e)
  }
}
```

## 回调地狱

```js
let fs = require('fs')
fs.readFile('template.txt', 'utf8', function (err, template) {
  fs.readFile('data.txt', 'utf8', function (err, data) {
    console.log(template + ' ' + data)
  })
})
```

- 解决方案

```js
let html = {}
let EventEmitter = require('events')

let emit = new EventEmitter()

//监听数据获取成功事件,事件发生后调用回调函数
emit.on('ready', function (key, value) {
  html[key] = value
  if (Object.keys(html).length == 2) {
    console.log(html)
  }
})

function render() {
  fs.readFile('./temp.txt', 'utf8', (err, data) => {
    console.log(data, 'ddd')
    emit.emit('ready', 'template', data)
  })

  fs.readFile('./test.txt', 'utf8', (err, data) => {
    emit.emit('ready', 'data', data)
  })
}

render()
```

## 添加一个哨兵变量

```js
let fs = require('fs')
function render() {
  fs.readFile('./temp.txt', 'utf8', (err, data) => {
    console.log(data, 'ddd')
    done('template', data)
  })
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    done('data', data)
  })
}
let done = xr(2, (result) => {
  console.log(result)
})
function xr(times, cb) {
  let html = {}
  return function (key, value) {
    html[key] = value
    if (Object.keys(html).length == times) {
      cb(html)
    }
  }
}

render()
```

## 生成器 Generators/ yield

- 当你在执行一个函数的时候，你可以在某个点暂停函数的执行，并且做一些其他工作，然后再返回这个函数继续执行， 甚至是携带一些新的值，然后继续执行。
- 上面描述的场景正是 JavaScript 生成器函数所致力于解决的问题。当我们调用一个生成器函数的时候，它并不会立即执行， 而是需要我们手动的去执行迭代操作（next 方法）。也就是说，你调用生成器函数，它会返回给你一个迭代器。迭代器会遍历每个中断点。
- next 方法返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，这是向 Generator 函数体内输入数据

```js
function* go(a) {
  console.log(1)
  let b = yield a
  console.log(2)
  let c = yield b
  console.log(3)
  return c
}

let bar = go('a1') //这里是第一次传参的地方
let a1 = bar.next() //第一次传参是没有必要的，
console.log(a1, 'a1')
let a2 = bar.next('Bz') //不传参就返回undefined
console.log(a2, 'a2')
let a3 = bar.next('a3') //不传参就返回undefined
console.log(a3, 'a3')
```
