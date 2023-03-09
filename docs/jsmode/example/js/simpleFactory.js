// function createPerson(name, age) {
//   var obj = {}
//   obj.name = name
//   obj.age = age

//   obj.getPersonInfo = function () {
//     return this.name + ', ' + this.age
//   }

//   return obj
// }

// let p1 = createPerson('guojing', 30)
// let p2 = createPerson('yangguo', 20)

// console.log(p1.getPersonInfo())
// console.log(p2.getPersonInfo())

//guojing, 30
//yangguo, 20

//反例
let LoginAlert = function (text) {
  this.content = text
}

LoginAlert.prototype.show = function () {
  //显示警示框
  console.log(this.content)
}

let userNameAlert = new LoginAlert('用户名不能多于16个字母或数字')
userNameAlert.show()

let passwordAlert = new LoginAlert('输入的密码不正确')
passwordAlert.show()

let LoginComfirm = function (text) {
  this.content = text
}

LoginComfirm.prototype.show = function () {
  //显示确认框
  console.log(this.content)
}

let loginConfirm = new LoginComfirm('您输入的用户不存在')

loginConfirm.show()

//反例的改造

let popFactory = function (name) {
  switch (name) {
    case 'alert':
      return new LoginAlert()
    case 'confirm':
      return new LoginComfirm()
    default:
      break
  }
}

//推荐

let Basketball = function () {
  this.info = '盛行于美国'
}

Basketball.prototype = {
  getMember() {
    console.log('每队需要5名队员')
  },
  getBallSize() {
    console.log('篮球很大')
  }
}

let Football = function () {
  this.intro = '足球在世界范围内很流行'
}
Football.prototype = {
  getMember() {
    console.log('每个队伍需要11名队员')
  },
  getBallSize() {
    console.log('足球很大')
  }
}

var Tennis = function () {
  this.intro = '每年有很多网球系列赛'
}
Tennis.prototype = {
  getMember() {
    console.log('每个队伍需要1名队员')
  },
  getBallSize() {
    console.log('网球很小')
  }
}

//运动工厂

let sportsFactory = function (name) {
  switch (name) {
    case 'NBA':
      return new Basketball()
    case 'wordCup':
      return new Football()
    case 'FrenchOpen':
      return new Tennis()
    default:
      break
  }
}

//test
let fb = sportsFactory('wordCup')
console.log(fb)
console.log(fb.intro)
//Football {intro: "足球在世界范围内很流行"}
// 足球在世界范围内很流行

//工厂模式

function createBook(name, time, type) {
  let o = new Object()
  o.name = name
  o.time = time
  o.type = type

  o.getName = function () {
    console.log(this.name)
  }

  return o
}

//test
let b1 = createBook('js book', 2023, 'js')
let b2 = createBook('css book', 2023, 'css')

b1.getName()
b2.getName()

//js book
//css book

//改造pop对象的创建

function createPopHigh(type, txt) {
  //相同的属性和方法
  let o = new Object()
  o.content = txt
  o.show = function () {
    console.log(this.content)
  }

  //针对不同的对象不同的方法实现
  if (type == 'alert') {
    o.alertHandle = function () {
      console.log('alertHandle')
    }
  }
  if (type == 'confirm') {
    o.confirmHandle = function () {
      console.log('confirmHandle')
    }
  }
  if (type == 'prompt') {
  }
  console.log(o, 'o')
  return o
}

let userNameAlert1 = createPopHigh('alert', '用户名只能是26个字母或数字')

userNameAlert1.show()
userNameAlert1.alertHandle()
// userNameAlert1.confirmHandle()

let userConfirm = createPopHigh('confirm', '用户名必须点击确认或者取消')

userConfirm.show()
userConfirm.confirmHandle()

console.log(userNameAlert1 == userConfirm)

// false

// ~(function () {
//   var a = 1

//   function a() {
//     // 此处的a只能在函数体内用到
//     console.log(a)
//     console.log(2)
//   }
//   a()
// })()

// ~(function () {
//   var a = 1

//   var a = function () {
//     // 此处的a只能在函数体内用到
//     // console.log(a)
//     console.log(2)
//   }
//   a()
// })()

var a = 2
~(function () {
  console.log(a)
  //   var a = 3
  a = 3
  console.log(a)
})()
