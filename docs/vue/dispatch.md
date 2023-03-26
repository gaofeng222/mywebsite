# vue 中的组件通信之 dispatch & broadcast

## 向上派发

不断的递归查找父级，比较简单

```js
Vue.prototype.$dispatch = function (eventName, value) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, value)
    parent = parent.$parent
  }
}
```

## 向下广播

```js
Vue.prototype.$broadcast = function (eventName, value) {
  console.log('bast')
  // let childrens = this.$children
  console.log(this.$children, 'this.$children')
  let broadcast = function (childrens) {
    childrens.forEach((children) => {
      children.$emit(eventName, value)
      if (children.$children) {
        broadcast(children.$children)
      }
    })
  }
  broadcast(this.$children)
}
```

## 注意事项

向下广播的时候，事件要不能写在父组件 create 里面的，此时子组件还未挂载

```js
//parent.vue
<template>
  <div id="app">
    <Parent />
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    Parent
  },
  created() {},
  mounted() {
    this.$broadcast('say') //事件必须写在mounted里面
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


//G1.vue
<template>
  <div>
    孙子组件: {{ value }}

    <div><button @click="changParent">改变</button></div>
  </div>
</template>

<script>
export default {
  name: 'G1',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    changParent() {
      //   this.$parent.addHandle() //第一种调用方式
      console.log(this.$parent, 'this.$parent')
      //   this.$parent.$emit('input', 400)  //第二种调用方式
      //   this.$parent.$listeners.input(500) //第三种调用方式
      this.$dispatch('input', 1800)
    }
  }
}
</script>

<style lang="scss" scoped></style>


//G2.vue
<template>
  <div>
    孙子组件2: {{ value }}

    <div><button @click="changParent">改变2</button></div>
  </div>
</template>

<script>
export default {
  name: 'G2',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    changParent() {
      //   this.$parent.addHandle() //第一种调用方式
      console.log(this.$parent, 'this.$parent')
      //   this.$parent.$emit('input', 400)  //第二种调用方式
      //   this.$parent.$listeners.input(500) //第三种调用方式
      this.$dispatch('input', 1800)
    }
  }
}
</script>

<style lang="scss" scoped></style>

```
