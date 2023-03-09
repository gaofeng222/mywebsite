let Car = function () {}

Car.prototype = {
  getPrice() {
    throw new Error('抽象方法不能调用')
  },
  getSpeed() {
    throw new Error('抽象方法不能调用')
  }
}

let VehicleFactory = function (subType, superType) {
  if (typeof VehicleFactory[superType] === 'function') {
    function F() {}
    F.prototype = new VehicleFactory[superType]()
    subType.constructor = subType
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
