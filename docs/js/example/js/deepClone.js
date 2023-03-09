let obj = {
  age: 5,
  hobby: [1, 2, 3],
  getAge() {
    console.log(this.age)
  },
  home: ['背景', '上哈'],
  name: undefined
}

function deepClone(parent, child) {
  child = child ? child : {}
  for (const key in parent) {
    //排除原型上面的属性
    if (Object.hasOwnProperty.call(parent, key)) {
      if (typeof parent[key] == 'object') {
        child[key] =
          Object.prototype.toString.call(parent[key]) == '[object object]'
            ? {}
            : []
        deepClone(parent[key], child[key])
      }
      child[key] = parent[key]
    }
  }
  return child
}
let obj2 = deepClone(obj)
let obj3 = JSON.parse(JSON.stringify(obj))
obj2.age = 10
obj2.hobby = [8, 20]
console.log(obj, 'obj1')
console.log(obj2, 'obj2')
console.log(obj3, 'obj3') //function,undefined的数据无法拷贝

/**
 *{
  age: 5,
  hobby: [ 1, 2, 3 ],
  getAge: [Function: getAge],
  home: [ '背景', '上哈' ],
  name: undefined
} obj1
{
  age: 10,
  hobby: [ 8, 20 ],
  getAge: [Function: getAge],
  home: [ '背景', '上哈' ],
  name: undefined
} obj2
{ age: 5, hobby: [ 1, 2, 3 ], home: [ '背景', '上哈' ] } obj3

 *
 */
