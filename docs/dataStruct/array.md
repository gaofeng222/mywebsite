# JS 数组

## 定义

JavaScript 数组用于在单一变量中存储多个值。也就是数组是一种特殊的变量，它能够一次存放一个以上的值。

## 创建数组

```js
var array-name = [item1, item2, ...];
```

## JavaScript 关键词 new

```js
var cars = new Array('Saab', 'Volvo', 'BMW')
```

以上两个例子效果完全一样。无需使用 new Array()。

出于简洁、可读性和执行速度的考虑，请使用第一种方法（数组文本方法,也叫字面量方法）。

## 数组是对象

```js
数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。

但是，JavaScript 数组最好以数组来描述。

数组使用数字来访问其“元素”。
```

## 数组和对象的区别

在 JavaScript 中，**数组**使用**数字**索引。

在 JavaScript 中，**对象**使用**命名**索引。

数组是特殊类型的对象，具有数字索引。

## 何时使用数组，何时使用对象？

- JavaScript 不支持关联数组
- 如果希望元素名为字符串（文本）则应该使用对象。
- 如果希望元素名为数字则应该使用数组。

## 避免 new Array()

没有必要使用 JavaScript 的内建数组构造器 new Array()。

请使用 [] 取而代之！

new 关键词只会使代码复杂化。它还会产生某些不可预期的结果：

## 识别数组

常见的问题是：我如何知晓某个变量是否是数组？

问题在于 `JavaScript` 运算符 `typeof` 返回 `"object"`

typeof 运算符返回 `"object"`，因为 JavaScript 数组属于对象。

**解决方案 1：**

为了解决这个问题，ECMAScript 5 定义了新方法` Array.isArray(array)：`
此方案的问题在于 ECMAScript 5 不支持老的浏览器。

**解决方案 2：**

创建您自己的 isArray() 函数以解决此问题：

```js
function isArray(x) {
  return x.constructor.toString().indexOf('Array') > -1
}
```

**解决方案 3：**

假如对象由给定的构造器创建，则 instanceof 运算符返回 true：

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

fruits instanceof Array // 返回 true
```

## 数组的增删改查的方法

- pop 会影响到原数组，pop 返回被删的元素

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.pop()

console.log('原来的数组', fruits)
console.log('返回的数据', result)

// 原来的数组 [ 'Banana', 'Orange', 'Apple' ]
// 返回的数据 Mango
```

- push 会影响到原数组，push 返回新数组的长度

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.push('purple', 'potato')

console.log('原来的数组', fruits)
console.log('返回的数据', result)

// 原来的数组 [ 'Banana', 'Orange', 'Apple', 'Mango', 'purple', 'potato' ]
// 返回的数据 6
```

- shift 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。位移与弹出等同，但处理首个元素而不是最后一个。
  **会影响到原数组，pop 返回被删的元素**

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.shift()

console.log('原来的数组', fruits)
console.log('返回的数据', result)

// 原来的数组 [ 'Orange', 'Apple', 'Mango' ]
// 返回的数据 Banana
```

- splice() 方法可用于向数组添加新项：

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.splice(2, 0, 'Lemon', 'Kiwi')

console.log('原来的数组', fruits)
console.log('返回的数据', result)

// 原来的数组 [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// 返回的数据 []
```

- slice() 方法用数组的某个片段切出新数组。

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.slice(1)

console.log('原来的数组', fruits)
console.log('返回的数据', result)

// 原来的数组 [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// 返回的数据 [ 'Orange', 'Apple', 'Mango' ]
```

- unshift 方法（在开头）向数组添加新元素，并“反向位移”旧元素,unshift() 方法返回新数组的长度。
  **会影响到原数组，unshift 返回新数组的长度**

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

let result = fruits.unshift('Lemon')

console.log('原来的数组', fruits)
console.log('返回的数据', result)
console.log('返回的数据', result)

// 原来的数组 [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
// 返回的数据 5
```

- delete 删除元素

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
delete fruits[0] // 把 fruits 中的首个元素改为 undefined
```

算法面试题 1: 给定一个数组，进行倒序，比如:

```bash
输入:['Banana', 'Orange', 'Apple', 'Mango']
输出:[ 'Mango', 'Apple', 'Orange','Banana' ]
```

实现：

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']

function reverseArray(array) {
  let target = []
  while (array.length > 0) {
    target.push(fruits.pop())
  }
  return target
}

let res = reverseArray(fruits)

console.log(res)
```

算法面试题 2: 生成指定重复次数的字符串

```js
function repeat(str, num) {
  let count = 0,
    result = ''
  return function () {
    while (count < num) {
      result += str
      count++
    }
    return result
  }
}

let testRes = repeat('gaofeng', 3)

console.log(testRes()) //gaofenggaofenggaofeng
```
