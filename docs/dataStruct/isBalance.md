# 括号匹配的算法

```js
function isBalance(str) {
  const [first, ...others] = str
  const stack = [first]

  while (others.length > 0) {
    const c = stack[stack.length - 1] //最后一项
    const n = others.shift() //第二项
    if (!match(n, c)) {
      stack.push(n)
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
}

function match(n, c) {
  return (c === '[' && n === ']') || (c === '(' && n === ')')
}

//test

const str = '[(()]'
const str2 = '[()]'

console.log(isBalance(str2)) //true
```
