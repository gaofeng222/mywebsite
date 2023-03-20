# js 里面的防抖与节流

![防抖节流的](../images/debounce.png)

## 防抖

- 定义

  就是指连续出发事件，但是在设定的时间内，如果再次触发的话，之前的计时就作废，**从新开始计时**

- 应用场景

  1. 搜索框输入搜索
  2. 文本编辑器实时保存

## 实例代码:搜索框输入搜索

```js
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
    if (timeId) {
      clearTimeout(timeId)
    }
    // console.log(this, 'this')
    timeId = setTimeout(() => {
      // fn.apply(this, arguments)
      fn.apply(this)
    }, ms)
  }
}
```

## 节流

- 定义

  单位时间内，频繁触发，我只执行一次
  **不要打断我，无论触发多少次我只执行一次**

  高频事件 快速点击，鼠标滑动，resize，scroll  
  下拉加载  
  视频播放记录时间

```js
window.onload = function () {
  document.addEventListener(
    'mousemove',
    throttle(() => {
      console.log('move')
    }, 3000)
  )
}

function throttle(fn, ms) {
  let timeId = null
  return function () {
    if (timeId != null) {
      return
    }
    timeId = setTimeout(() => {
      fn.apply(this)
      timeId = null
    }, ms)
  }
}
```

## 补充

```js
function debounce(fn, wait = 2000, immediate) {
  let timer

  return function () {
    if (immediate) {
      return fn.apply(this, arguments)
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

// window.addEventListener('resize', () => {
//     console.log('正常触发')
// })

// window.addEventListener('resize', debounce(() => {
//     console.log('延迟触发')
// }))

function throttle(fn, wait = 2000) {
  let prev = new Date()
  return function () {
    const args = arguments
    let now = new Date()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = new Date()
    }
  }
}

window.addEventListener('resize', () => {
  console.log('正常触发')
})

window.addEventListener(
  'resize',
  throttle(() => {
    console.log('延迟触发')
  })
)

//组合起来

function throttle(fn, wait, isDebounce) {
  let lastCall = 0,
    timer
  return function (...args) {
    if (isDebounce) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(...args)
      }, wait)
    } else {
      let now = new Date()
      if (now - lastCall > wait) {
        fn.apply(this, ...args)
        lastCall = new Date()
      }
    }
  }
}
```

[视频讲解](https://www.bilibili.com/video/BV1dv4y117mY/?spm_id_from=pageDriver&vd_source=5f704a73611cba40b8f8f7d423e9ee2a)
