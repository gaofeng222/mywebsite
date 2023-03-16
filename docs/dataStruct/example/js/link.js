function Node(element) {
  this.element = element
  this.next = null
}

function LinkedList() {
  let length = 0,
    head = null
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
}

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
