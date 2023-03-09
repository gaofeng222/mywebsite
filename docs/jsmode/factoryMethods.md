# 工厂方法模式

通过对产品类的抽象，使其创建业务，主要负责用于创建多类产品的示例。

```js
let Java = function (content) {
  this.content = content
  //new的时候就已经执行了
  ;(function (content) {
    let oDiv = document.createElement('div')
    oDiv.innerHTML = content
    oDiv.style.color = 'green'
    document.getElementById('app').appendChild(oDiv)
  })(content)
}

let PHP = function (content) {
  this.content = content
  //new的时候就已经执行了
  ;(function (content) {
    let oDiv = document.createElement('div')
    oDiv.innerHTML = content
    oDiv.style.color = 'yellow'
    oDiv.style.background = 'red'
    document.getElementById('app').appendChild(oDiv)
  })(content)
}

let JS = function (content) {
  this.content = content
  //new的时候就已经执行了
  ;(function (content) {
    let oDiv = document.createElement('div')
    oDiv.innerHTML = content
    oDiv.style.background = 'pink'
    document.getElementById('app').appendChild(oDiv)
  })(content)
}

window.onload = function () {
  //调用方法一
  new Java('Java技术哪家强')
  new PHP('php是最好的语言')
  new JS('js 不算是程序员')
  //简单工厂模式
  function JobFactory(type, content) {
    switch (type) {
      case 'java':
        return new Java(content)
      case 'php':
        return new PHP(content)
      case 'js':
        return new JS(content)

      default:
        break
    }
  }
  //调用方法二
  JobFactory('java', 'java找南翔')
  JobFactory('php', 'php找南翔')
  JobFactory('js', 'js找南翔')
}
```

## 工厂方法模式

工厂方法模式本意是说将实际创建对象工作推迟到子类当中。这样核心类就成了抽象类不过对于 JavaScript 不必这么深究，JavaScript 没有像传统创建抽象类那样的方式轻易创建抽象类，所以在 JavaScript 中实现工厂方法模式我们只需要参考它的核心思想即可。所以我们可以将工厂方法看作是一个实例化对象的工厂类。

**1. 安全类模式**

```js
let Demo = function () {
  //安全模式的解决方案
  if (!(this instanceof Demo)) {
    return new Demo()
  }
}

Demo.prototype = {
  show() {
    console.log('成功显示')
  }
}

let d = new Demo()
d.show() //成功显示

let d2 = Demo()

d2.show() //非安全模式的打印，Uncaught TypeError: Cannot read property 'show' of undefined
d2.show() //正常打印
```

## 安全的工厂方法

```js
let Factory = function (type, content) {
  //如果this是当前Factory的实例，就走这步
  if (this instanceof Factory) {
    let s = new this[type](content) //2
    return s
  } else {
    //初始化的时候this不是Factory的实例
    //否则就走这里
    //这里巧妙之处就是递归调用自己
    //递归调用的时候this已经是Tactory的实例，所以就会走到上面的2
    return new Factory(type, content)
  }
}

Factory.prototype = {
  Java: function (content) {
    console.log(content)
  },
  JavaScript: function (content) {},
  php: function (content) {},
  UI: function (content) {
    this.content = content
    ;(function (content) {
      let oDiv = document.createElement('div')
      oDiv.innerHTML = content
      oDiv.style.background = 'pink'
      document.getElementById('app').appendChild(oDiv)
    })(content)
  }
}

var data = [
  { type: 'JavaScript', content: 'JavaScript 哪家强' },
  { type: 'Java', content: 'Java 哪家强' },
  { type: 'php', content: 'php 哪家强' },
  { type: 'UI', content: 'UI哪家强' },
  { type: 'UI', content: 'UI 哪家强' },
  { type: 'JavaScript', content: 'JavaScript 哪家强' }
]

window.onload = function () {
  for (let i = data.length - 1; i >= 0; i--) {
    let s = data[i]
    Factory(s.type, s.content)
  }
}
```

## 总结

对于创建多类对象，前面学过的简单工厂模式就不太适用了，这是简单工厂模式的应用局限，当然这正是工厂方法模式的价值之所在，通过工厂方法模式我们可以轻松创建多个类的实例对象，这样工厂方法对象在创建对象的方式也避免了使用者与对象类之间的耦合，用户不必关心创建该对象的具体类，只需调用工厂方法即可。

在实践中，理想与现实总有一线之隔的，新来的同事很可能错误地直接调用工厂方法，这样就很有可能通过工厂方法执行中的 this 对象为全局对象添加全局变量，并且得不到期望的实例对象，此时一个安全的工厂对象则让我们吃了一颗定心丸。
