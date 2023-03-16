# vue2 响应式系统 Object.defineProperty

## 基础配置

```js
let obj = {}
Object.defineProperty(obj, 'school', {
  configurable: true,
  writable: true,
  enumerable: true,
  value: '高峰'
})
//   delete obj.school    configurable: true 可删
obj.school = 'gaofeng' //  writable: true,可改写
console.log(obj.school)

for (const key in obj) {
  console.log(key) // enumerable: true,可枚举
}
```

## 数据劫持

```js
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
```
