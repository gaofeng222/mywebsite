# 栈结构的实现

是一种受限的线性结构,一是基于数组的实现，一是链表的实现

## 栈结构的封装---es5

```js
function Stack() {
  let item = [] //数组的实现

  //栈的相关操作

  //入栈
  this.push = function (element) {
    item.push(element)
    return item.length
  }
  //出栈
  this.pop = function () {
    return item.pop()
  }
  //获取栈顶的元素
  this.peek = function () {
    return item[item.length - 1]
  }
  //是否是空栈
  this.isEmpty = function () {
    return item.length === 0
  }
  //栈的长度
  this.size = function () {
    return item.length
  }
  //获取所有的元素
  this.toString = function () {
    return item.toString() //item.join('')
  }
}

let s = new Stack()

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)

console.log(s.toString())
console.log(s.size())
console.log(s.pop())
console.log(s.toString())
console.log(s.isEmpty())
console.log(s.peek())

// 1,2,3,4,5
// 5
// 5
// 1,2,3,4
// false
// 4
```

## 栈结构的封装---es6

```js
class Stack {
  //es6的私有变量声明方法
  #item = []
  push(element) {
    this.#item.push(element)
  }
  pop() {
    return this.#item.pop()
  }
  peek() {
    return this.#item[this.#item.length - 1]
  }
  isEmpty() {
    return this.#item.length === 0
  }
  size() {
    return this.#item.length
  }
  toString() {
    return this.#item.toString()
  }
}

let s = new Stack()

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)

console.log(s.toString())
console.log(s.size())
console.log(s.pop())
console.log(s.toString())
console.log(s.isEmpty())
console.log(s.peek())

// 1,2,3,4,5
// 5
// 5
// 1,2,3,4
// false
// 4
```

## 算法面试 1：十进制转二进制

```js
function convertNums(number) {
  let result = new Stack(),
    str = ''

  while (number > 0) {
    let demicNum = number % 2 //取余
    result.push(demicNum)
    number = Math.floor(number / 2)
  }
  while (!result.isEmpty()) {
    str += result.pop()
  }
  return str
}

const test = convertNums(50)

console.log(test) //110010
```
