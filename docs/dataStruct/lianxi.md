# 常见的算法练习

## 判断是否是回文

```js
function checkPalindrom(str) {
  return str === str.split('').reverse().join('')
}

let demo1 = checkPalindrom('mamam')
console.log(demo1) //true
```

## 数组去重

```js
function unique1(arr) {
  return Array.from(new Set(arr))
}
let arr = [1, 13, 24, 11, 11, 14, 1, 2]

let demo2 = unique1(arr)
console.log(demo2) //[1, 13, 24, 11, 14, 2]

function unique2(arr) {
  let obj = {},
    newArr = []
  for (let key in arr) {
    if (!obj[arr[key]]) {
      obj[arr[key]] = arr[key]
      newArr.push(arr[key])
    }
  }
  return newArr
}
let demo3 = unique2(arr)
console.log('demo3', demo3) // "demo3",[1, 13, 24, 11, 14, 2]
```

## 统计一个字符串出现最多的字母

```js
let str = 'afjghdfraaaasdenas'

function findMaxDuplicateChar(str) {
  if (str.length == 1) {
    return str
  }
  let charObj = {}
  for (let index = 0; index < str.length; index++) {
    if (!charObj[str.charAt(index)]) {
      charObj[str.charAt(index)] = 1
    } else {
      charObj[str.charAt(index)] += 1
    }
  }
  //遍历查找最大的值的序号
  let maxValue = '',
    maxCount = 0
  for (let key in charObj) {
    if (charObj[key] > maxValue) {
      maxValue = key
      maxCount = charObj[key]
    }
  }

  return {
    charObj,
    maxValue,
    maxCount
  }
}

let demo4 = findMaxDuplicateChar(str)

console.log(
  'demo4',
  '最大项是：' + demo4.maxValue,
  '最大的次数是：' + demo4.maxCount
) //"demo4","最大项是：a","最大的次数是：6"
```

## 冒泡排序

```js
let arr1 = [11, 3, 2, 4, 5]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //外层和内层的比较
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        //把外层的值赋值为小的，小的在前面，大的在后面
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let demo5 = bubbleSort(arr1)
console.log('demo5', demo5) //"demo5",[2, 3, 4, 5, 11]
```

## 快速排序

```js
function qSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let leftArr = [],
    rightArr = []
  let q = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < q) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  //递归实现
  return [].concat(qSort(leftArr), [q], qSort(rightArr))
}

let demo6 = qSort(arr1)
console.log('demo6', demo6) //"demo6",[2, 3, 4, 5, 11]
```

## 不借助变量，实现交换

```js
function swap(a, b) {
  b = b - a
  a = a + b
  b = a - b
  return [a, b]
}

let demo7 = swap(3, 4)

console.log('demo7', demo7) // "demo7",[4, 3]
```

## 生成斐波那契数组的方法

```js
function fab(n) {
  let arr = [],
    i = 0

  while (i < n) {
    if (i <= 1) {
      arr.push(1)
    } else {
      arr.push(arr[i - 1] + arr[i - 2]) //前面两项相加
    }
    i++
  }

  return arr
}

let demo8 = fab(9)

console.log('demo8', demo8) // "demo8",[1, 1, 2, 3, 5, 8, 13, 21, 34]
```

[参考练习](https://www.cnblogs.com/lvmylife/p/7208541.html)
