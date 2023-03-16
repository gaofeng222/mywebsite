# js 中的链表

要存储多个元素，数组（或列表）可能是最常用的数据结构。
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

## 创建链表

```js
function Node(element) {
  this.element = element
  this.next = null
}

function LinkedList() {
  let length = 0
  let head = null
  this.append = function (element) {}
  this.insert = function (position, element) {}
  this.removeAt = function (position) {}
  this.remove = function (element) {}
  this.indexOf = function (element) {}
  this.isEmpty = function () {}
  this.size = function () {}
  this.getHead = function () {}
  this.toString = function () {}
  this.print = function () {}
}
```

## 向链表尾部追加元素

```js
this.append = function (element) {
  let node = new Node(element),
    current
  //如果头节点是空
  if (head == null) {
    head = node
  } else {
    //当前的节点就是头节点
    current = head
    //一直遍历，只要存在next向后找,重置current
    while (current.next) {
      current = current.next
    }
    //如果没有next
    current.next = node
  }
  length++
}
```

## 从链表中移除元素

```js
this.removeAt = function (position) {
  if (position > -1 && position < length) {
    let current = head,
      previous,
      index = 0

    if (position == 0) {
      head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    length--
    return current.next
  } else {
    return null
  }
}
```

## 在任意位置插入元素

```js
this.insert = function (position, element) {
  if (position > -1 && position < length) {
    let node = new Node(element),
      current = head,
      previous,
      index = 0
    //头部添加一个元素
    if (position == 0) {
      node.next = current
      head = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    length++
    return true
  } else {
    return false
  }
}
```

## 实现其他方法

```js
this.remove = function (element) {
  let index = this.indexOf(element)
  return this.removeAt(index)
}
this.indexOf = function (element) {
  let index = 0,
    current = head
  while (current) {
    if (element == current.element) {
      return index
    }
    index++
    current = current.next
  }
  return -1
}
this.isEmpty = function () {
  return length == 0
}
this.size = function () {
  return length
}
this.getHead = function () {
  return head.element
}
this.toString = function () {
  let current = head,
    str = ''
  while (current) {
    str += current.element + (current.element ? 'n' : '')
    current = current.next
  }
  return str
}
this.print = function () {
  let str = '',
    current = head

  while (current) {
    str += current.element
    //   console.log(current, '00')
    current = current.next
  }
  return str
}
```

## 代码演示

```js
let link = new LinkedList()

link.append(15)
link.append(10)
link.append(30)
link.insert(1, 200)

console.log(link.toString())
console.log(link.indexOf(10))
console.log(link.indexOf(30))
console.log(link.size())
console.log(link.isEmpty())
console.log(link.getHead())
console.log(link.print())

// 15n200n10n30n
// 2
// 3
// 4
// false
// 15
// 152001030
```

## 双向链表

```js
function Node(element) {
  this.element = element
  this.next = null
  this.prev = null
}

function DBLinkedList() {
  let length = 0,
    head = null,
    tail = null

  this.insert = function (pos, element) {
    if (pos >= 0 && pos <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      //在第一个位置添加
      if (pos == 0) {
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else if (pos === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.toString = function () {
    let str = '',
      current = head

    while (current) {
      str += current.element + (current.element ? 'n' : '')
      current = current.next
    }
    return str
  }
  this.getHead = function () {
    return head.element
  }
  this.getTail = function () {
    let current = head
    while (current.next) {
      current = current.next
    }
    return current.element
  }
  this.size = function () {
    return length
  }
  this.removeAt = function (pos) {
    if (pos > -1 && pos < length) {
      let current = head,
        previous,
        index = 0

      if (pos == 0) {
        head = current.next

        if (length == 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (pos == length - 1) {
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < pos) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.element
    }
  }
  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.indexOf = function (element) {
    let index = 0,
      current = head
    while (current) {
      if (element == current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  //从末尾添加
  this.append = function (element) {
    let index = 0,
      node = new Node(element),
      previous,
      current

    if (head == null) {
      head = node
      tail = node
    } else {
      current = head
      while (current.next) {
        console.log(current, 'current')
        current = current.next
      }
      current.next = node
      node.prev = current
      tail = node
    }
    length++
  }
}

let link = new DBLinkedList()

link.insert(0, 15)
link.insert(1, 32)
link.append(10)
link.append(30)
link.insert(2, 61)
link.append(200)
console.log(link.toString())
console.log(link.indexOf(10))
console.log(link.indexOf(30))
console.log(link.getHead())
console.log(link.getTail())
console.log(link.removeAt(1))
console.log(link.toString())
console.log(link.remove(61))
console.log(link.toString())

//15n32n61n10n30n200n
// 3
// 4
//15
// 200
// 32
// 15n61n10n30n200n
// 61
// 15n10n30n200n
```
