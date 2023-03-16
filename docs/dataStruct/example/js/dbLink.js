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
