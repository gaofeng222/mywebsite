//   let obj = {}
//   Object.defineProperty(obj, 'school', {
//     configurable: true,
//     // writable: true,
//     enumerable: true,
//     // value: '高峰',
//     get() {
//       //获取obj.school
//       return 'gaofeng'
//     },
//     set() {}
//   })
//   //   delete obj.school    configurable: true 可删
//   obj.school = 'gaofeng' //  writable: true,可改写
//   console.log(obj.school)

//   for (const key in obj) {
//     console.log(key) // enumerable: true,可枚举
//   }

let obj = {}
Object.defineProperty(obj, 'school', {
  configurable: true,
  enumerable: true,
  get() {
    //获取obj.school
    return 'gaofeng'
  },
  set(value) {
    console.log(value) //beijingschool
  }
})
console.log(obj.school) //gaofeng
obj.school = 'beijingschool'
