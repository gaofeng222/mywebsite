function MyPromise(constructor) {
  let self = this

  self.status = 'pending'
  self.value = undefined
  self.reason = undefined

  function resolve(value) {
    if (self.status == 'pending') {
      self.value = value
      self.status = 'resolved'
    }
  }
  function reject(reason) {
    if (self.status == 'pending') {
      self.reason = reason
      self.status = 'rejected'
    }
  }
  try {
    constructor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

//test

let demo2 = new Promise((resolve, reject) => {
  resolve('hahaha---')
})

demo2.then((res) => {
  console.log(res, 'tessst')
})
