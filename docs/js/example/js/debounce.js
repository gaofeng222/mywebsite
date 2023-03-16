window.onload = function () {
  //   document.getElementById('ipt').onkeyup = function (e) {
  //     console.log(e.target.value)
  //   }
  document.getElementById('ipt').onkeyup = (e) =>
    debounce(() => console.log(e.target.value), 3000)()
}

function debounce(fn, ms) {
  let timeId = null
  return function () {
    if (timeId != null) {
      clearTimeout(timeId)
    }
    console.log(this, 'this')
    timeId = setTimeout(() => {
      // fn.apply(this, arguments)
      fn.apply(this)
    }, ms)
  }
}

// window.onload = function () {
//   document.addEventListener(
//     'mousemove',
//     throttle(() => {
//       console.log('move')
//     }, 3000)
//   )
// }

// function throttle(fn, ms) {
//   let timeId = null
//   return function () {
//     if (timeId != null) {
//       return
//     }
//     timeId = setTimeout(() => {
//       fn.apply(this)
//       timeId = null
//     }, ms)
//   }
// }
