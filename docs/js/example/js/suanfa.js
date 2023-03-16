//1.找出数字数组中最大的元素（使用Match.max函数）

let res = Math.max.apply(null, [1, 2, 3, 4, 5, 9])
console.log(res)

// 2.转化一个数字数组为function数组（每个function都弹出相应的数字）
let arr = [1, 2, 3, 4, 5]

function changeToFnArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('传入的必须是数组')
  }

  let fnArray = []
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index]

    fnArray.push(() => {
      console.log(item)
    })
  }
  return fnArray
  //   return function () {
  //     fnArray.forEach((ele) => {
  //       ele()
  //     })
  //   }
}
// let result = changeToFnArray(arr)
// result()

let result = changeToFnArray(arr)

result.forEach((ele) => {
  ele()
})
// 3.给object数组进行排序（排序条件是每个元素对象的属性个数）
var obj_array = [
  {
    name: '张三'
  },
  {
    name: '张三',
    age: 25
  },
  {
    name: '张三',
    age: 25,
    address: '湖北武汉'
  }
]

//多种排序算法

//自带的排序

function sortArray(arr) {
  arr.forEach((ele) => {
    ele.count = Object.keys(ele).length
  })
  arr.sort((a, b) => {
    // return a.count - b.count //up
    return b.count - a.count //down
  })
  return arr
}

console.log(sortArray(obj_array))

//4.利用JavaScript打印出Fibonacci数（不使用全局变量）

function fibc(num) {
  if (num == 1 || num == 2) return 1

  //   return fibc(num - 1) + fibc(num - 2) 强耦合
  return arguments.callee(num - 1) + arguments.callee(num - 2)
}

// const resFivc = fibc(5) //5
// const resFivc = fibc(6) //8
const resFivc = fibc(12) //144
console.log('resFivc', resFivc) //8

//5.实现如下语法的功能：var a = (5).plus(3).minus(6); //2

Number.prototype.plus = function (num) {
  return this + num
}
Number.prototype.minus = function (num) {
  return this - num
}

var a = (5).plus(3).minus(6) //2

console.log('a', a)
