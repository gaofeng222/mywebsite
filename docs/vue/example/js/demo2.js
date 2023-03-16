function Vue(options = {}) {
  this.$options = options //将所有属性挂载在$options

  var data = (this._data = this.$options.data)

  //数据劫持下
  observe(data)

  for (const key in data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        return this._data[key]
      },
      set(newVal) {
        this._data[key] = newVal
      }
    })
  }
  console.log(options, 'options')
  new Compile(options.el, this)
}

//编译

function Compile(el, vm) {
  //el表示替换的范围
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child)
  }
  vm.$el.appendChild(fragment)
}

function observe(data) {
  if (typeof data != 'object') return
  return new Observe(data)
}

function Observe(data) {
  for (const key in data) {
    let val = data[key]
    observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      get() {
        return val
      },
      set(newVal) {
        if (newVal == val) return
        val = newVal
        observe(newVal)
      }
    })
  }
}

//vue 不能新增不存在的属性，因为不存在的属性没有getter，setter
//深度响应，因为每次赋予一个新对象会为这个对象添加数据劫持
