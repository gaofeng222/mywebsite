# 插入排序

## 定义

插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了，接着，
它和第二项进行比较，第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确排
序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢？），以此类推。

```js
//插入排序
this.insertSort = function () {
  let len = array.length,
    j,
    temp
  for (let i = 1; i < len; i++) {
    j = i
    temp = array[i]
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
}
```

## 完整代码

```js
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
  //插入排序
  this.insertSort = function () {
    let len = array.length, //{1}
      j,
      temp
    for (let i = 1; i < len; i++) {
      j = i
      temp = array[i]
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
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
demo1.insertSort()
console.log(demo1.toString())
```
