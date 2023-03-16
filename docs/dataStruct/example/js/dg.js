let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门5', pid: 5 }
]

function generateTree(arr, pid) {
  if (arr.length == 0) {
    throw new Error('arr必须是数组')
  }
  let result = []
  generate(arr, result, pid)
  return result
}

function generate(arr, result, pid) {
  arr.forEach((item) => {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] }
      result.push(newItem)
      generate(arr, newItem.children, item.id)
    }
  })
}

console.log(generateTree(arr, 0))

function arrayToTree(items) {
  const result = [] // 存放结果集
  const itemMap = {} //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}

console.log(arrayToTree(arr))
