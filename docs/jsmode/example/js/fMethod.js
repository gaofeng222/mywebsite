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

// ## 工厂方法模式

let Demo = function () {
  //解决方案
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

d2.show() //Uncaught TypeError: Cannot read property 'show' of undefined

let Factory = function (type, content) {
  //如果this是当前Factory的实例，就走这步
  if (this instanceof Factory) {
    let s = new this[type](content) //2
    return s
  } else {
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
