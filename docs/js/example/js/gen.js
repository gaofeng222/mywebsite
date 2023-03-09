function isArray(param) {
  return Object.prototype.toString.call(param) == '[object Array]'
}

//版本一，调用麻烦
function isType(type) {
  return function (param) {
    return Object.prototype.toString.call(param) == `[object ${type}]`
  }
}

let demo1 = isType('Array')([1, 2, 3, 4])

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

//指定一个函数被调用多少次才真正执行
// function eat() {
//   console.log('吃完了')
// }

// function after(times, fn) {
//   let count = 0
//   return function () {
//     if (count++ == times) {
//       fn()
//     }
//   }
// }

// let newEat = after(3, eat)

// newEat()
// newEat()
// newEat()
// newEat()

// let fs = require('fs')

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) return

//   console.log(data, 'data')
// })

// let html = {}
// let EventEmitter = require('events')

// let emit = new EventEmitter()

// //监听数据获取成功事件,事件发生后调用回调函数
// emit.on('ready', function (key, value) {
//   html[key] = value
//   if (Object.keys(html).length == 2) {
//     console.log(html)
//   }
// })

// fs.readFile('./temp.txt', 'utf8', (err, data) => {
//   console.log(data, 'ddd')
//   emit.emit('ready', 'template', data)
// })

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   emit.emit('ready', 'data', data)
// })
// let fs = require('fs')
// function render() {
//   fs.readFile('./temp.txt', 'utf8', (err, data) => {
//     console.log(data, 'ddd')
//     done('template', data)
//   })
//   fs.readFile('./test.txt', 'utf8', (err, data) => {
//     done('data', data)
//   })
// }
// let done = xr(2, (result) => {
//   console.log(result)
// })
// function xr(times, cb) {
//   let html = {}
//   return function (key, value) {
//     html[key] = value
//     if (Object.keys(html).length == times) {
//       cb(html)
//     }
//   }
// }

// render()

// function* go(a) {
//   console.log(1)
//   let b = yield a
//   console.log(2)
//   let c = yield b
//   console.log(3)
//   return c
// }

// let bar = go('a1') //这里是第一次传参的地方
// let a1 = bar.next() //第一次传参是没有必要的，
// console.log(a1, 'a1')
// let a2 = bar.next('Bz') //不传参就返回undefined
// console.log(a2, 'a2')
// let a3 = bar.next('a3') //不传参就返回undefined
// console.log(a3, 'a3')

let fs = require('fs')

function readFile(filename) {
  return new Promise((res, rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        rej(err)
      } else {
        res(data)
      }
    })
  })
}

function* read() {
  let template = yield readFile('./temp.txt')
  let data = yield readFile('./test.txt')
  return template + '+' + data
}

co(read).then(
  function (data) {
    console.log(data)
  },
  function (err) {
    console.log(err)
  }
)

function co(gen) {
  let it = gen()
  return new Promise((res, rej) => {
    //自执行
    !(function next(lastVal) {
      let { value, done } = it.next(lastVal)
      if (done) {
        res(value)
      } else {
        value.then(next, (reason) => rej(reason))
      }
    })()
  })
}
