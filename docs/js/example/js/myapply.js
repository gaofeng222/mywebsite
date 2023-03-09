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
console.log(demo1)
let demo2 = add.myapply(obj)
console.log(demo2)
