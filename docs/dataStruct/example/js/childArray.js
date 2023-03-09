function solve(array, N) {
  const s = new Set()

  for (let index = 0; index <= array.length; index++) {
    for (let j = index + 1; j <= array.length; j++) {
      const remain = array.slice(index, j).reduce((x, y) => x + y) % N
      s.add(remain)
    }
  }

  return s.has(0)
}

//test

let demo1 = solve([2, 3, 4], 4)
console.log(demo1) //true
let demo2 = solve([2, 3, 4], 5)
console.log(demo2) //true
let demo3 = solve([2, 3, 4], 8)
console.log(demo3) //true
