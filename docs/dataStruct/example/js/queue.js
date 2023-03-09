// function Queue() {
//   let item = []
//   //入队
//   this.enqueue = function (element) {
//     item.push(element)
//   }
//   //出列
//   this.dequeue = function () {
//     return item.shift()
//   }
//   //查看第一个元素
//   this.peek = function () {
//     return item[0]
//   }
//   this.isEmpty = function () {
//     return item.length == 0
//   }
//   this.size = function () {
//     return item.length
//   }
//   this.toString = function () {
//     return item.toString()
//   }
// }

// let q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)

// console.log(q.toString())
// console.log(q.size())
// console.log(q.isEmpty())
// console.log(q.dequeue())
// console.log(q.toString())

// 1,2,3,4,5
// 5
// false
// 1
// 2,3,4,5

class Queue {
  #item = []
  //入队
  enqueue(element) {
    this.#item.push(element)
  }
  //出列
  dequeue() {
    return this.#item.shift()
  }
  //查看第一个元素
  front() {
    return this.#item[0]
  }
  isEmpty() {
    return this.#item.length == 0
  }
  size() {
    return this.#item.length
  }
  toString() {
    return this.#item.toString()
  }
}

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

console.log(q.toString())
console.log(q.size())
console.log(q.isEmpty())
console.log(q.dequeue())
console.log(q.toString())
// 1,2,3,4,5
// 5
// false
// 1
// 2,3,4,5

function passGame(nameList, num) {
  let queue = new Queue()
  //将所有一次加入到队列

  nameList.forEach((element) => {
    queue.enqueue(element)
  })

  //开始数数
  while (queue.size() > 1) {
    for (let index = 0; index < num - 1; index++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  console.log(queue.size())
  console.log(nameList.indexOf(queue.front()))
  return queue.front()
}

let testP = ['Lily', 'Lucy', 'Tom', 'Lilei', 'Gaofeng']

console.log(passGame(testP, 3))

// 1
// 3
// Lilei
