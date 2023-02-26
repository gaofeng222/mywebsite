# 二分搜索

## 定义

二分搜索算法的原理和猜数字游戏类似，就是那个有人说“我正想着一个 1 到 100 的数字”的
游戏。我们每回应一个数字，那个人就会说这个数字是高了、低了还是对了。

```js
function binarySearch(array, item) {
  //第一步数组必须排序好
  quickSort()

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
```

## 总结

这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤。  
(1) 选择数组的中间值。  
(2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。  
(3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找。  
(4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找。
