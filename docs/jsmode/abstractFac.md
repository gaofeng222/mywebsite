# 抽象工厂模式

通过对类的工厂抽象使其业务用于对产品类簇的创建而不负责创建某一类产品的实例。  
`abstract` 还是一个保留字，所以目前来说还不能像传统面向对象语言那样轻松地创建。抽象类是一种声明但不能使用的类，当你使用时就会报错。不过 JavaScript 是灵活的，所以我们可以**在类的方法中手动地抛出错误来模拟抽象类**。

```js
let Car = function () {}

Car.prototype = {
  getPrice() {
    throw new Error('抽象方法不能调用')
  },
  getSpeed() {
    throw new Error('抽象方法不能调用')
  }
}
```

## 示例代码

```js
let VehicleFactory = function (subType, superType) {
  if (typeof VehicleFactory[superType] === 'function') {
    //缓存类
    function F() {}
    //继承父类属性和方法
    F.prototype = new VehicleFactory[superType]()
    //子类cotor指向自己
    subType.constructor = subType
    //子类原型继承父类
    subType.prototype = new F()
  } else {
    throw new Error('为创建该抽象类')
  }
}

VehicleFactory.Car = function () {
  this.type = 'car'
}

VehicleFactory.Car.prototype = {
  getPrice() {
    return new Error('抽象方法不能调用')
  },
  getSpeed() {
    throw new Error('抽象方法不能调用')
  }
}
VehicleFactory.Bus = function () {
  this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
  getPrice() {
    return new Error('抽象方法不能调用')
  },
  getPassengerNum() {
    throw new Error('抽象方法不能调用')
  }
}
VehicleFactory.Truck = function () {
  this.type = 'truck'
}
VehicleFactory.Truck.prototype = {
  getPrice() {
    return new Error('抽象方法不能调用')
  },
  getTrainLoad() {
    throw new Error('抽象方法不能调用')
  }
}

let BMW = function (price, speed) {
  this.price = price
  this.speed = speed
}

//抽象工厂实现对抽象类的继承
VehicleFactory(BMW, 'Car')
BMW.prototype.getPrice = function () {
  return this.price
}
BMW.prototype.getSpeed = function () {
  return this.speed
}

let car = new BMW(2000, 9000)
console.log(car.getPrice())
console.log(car.getSpeed())
```

## 总结

抽象工厂其实是一个实现子类继承父类的方法，在这个方法中我们需要通过传递子类以及要继承父类(抽象类)的名称，并且在抽象工厂方法中又增加了一次对抽象类存在性的一次判断，

如果存在，则将子类继承父类的方法。然后子类通过寄生式继承。继承父类过程中有一个地方需要注意，就是在对过渡类的原型继承时，我们不是继承父类的原型，而是通过 new 关键字复制的父类的一个实例，这么做是因为过渡类不应仅仅继承父类的原型方法，还要继承父类的对象属性，所以要通过 new 关键字将父类的构造函数执行一遍来复制构造函数中的属性和方法。

对抽象工厂添加抽象类也很特殊,因为抽象工厂是个方法不需要实例化对象，故只需要一份，因此直接为抽象工厂添加类的属性即可，于是我们就可以通过点语法在抽象工厂上添加我们一会儿需要的三个汽车簇抽象类 Car、Bus、Truck
