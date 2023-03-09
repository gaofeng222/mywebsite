// Function.prototype.mycall = function (context, ...rest) {
//   context.fn = this
//   const r = context.fn(...rest)
//   delete context.fn
//   return r
// }

// function add(a, b, c) {
//   return a + b + c
// }
// let obj = { name: 'abc' }
// let demo1 = add.mycall(obj, 1, 2, 3)
// console.log(demo1)

Function.prototype.mycall = function (context, ...args) {
  context = context != null && context != undefined ? context : window
  context.fn = this //调用这个方法的函数就是this
  const result = context.fn(...args)
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
