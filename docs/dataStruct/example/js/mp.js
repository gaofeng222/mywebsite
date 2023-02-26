//创建一个数组

function ArrayList() {
  let array = []
  const swap = function (array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp

    //es6的方法
    /* [ array[index1], array[index2]] = [ array[index2], array[index1]] */
  }
  this.insert = function (item) {
    array.push(item)
  }
  this.toString = function () {
    return array.join('')
  }
  //冒泡排序
  this.bubbleSort = function () {
    for (let i = 0, len = array.length; i < len; i++) {
      for (let j = 0, len = array.length - 1; j < len; j++) {
        let now = array[j]
        let next = array[j + 1]
        if (now > next) {
          swap(array, j, j + 1)
        }
      }
    }
  }
}

function createNonSortedArray(size) {
  var array = new ArrayList()
  for (var i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

const demo1 = createNonSortedArray(6)
console.log(demo1.toString())
demo1.bubbleSort()
console.log(demo1.toString())
