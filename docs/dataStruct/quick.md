# 快速排序

快速排序也许是最常用的排序算法了。它的复杂度为 **O(nlogn)**，且它的性能通常比其他的复杂度为 O(nlogn)的排序算法要好。和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。

## 思路

(1) 首先，从数组中选择中间一项作为主元。  
(2) 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指  
针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交  
换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之  
前，而比主元大的值都排在主元之后。这一步叫作划分操作。  
(3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的  
子数组）重复之前的两个步骤，直至数组已完全排序。

```js
function quickSort() {
  quick(array, 0, array.length - 1)
}

let quick = function (array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
}

let partition = function (array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}
```
