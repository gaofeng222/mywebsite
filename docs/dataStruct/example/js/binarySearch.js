function binarySearch(array, item) {
  //第一步排序好

  let low = 0,
    high = array.length - 1,
    mid,
    element

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = array[mid]
    debugger
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(binarySearch(arr, 5))
