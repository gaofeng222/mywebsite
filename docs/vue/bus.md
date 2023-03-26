# vue 中的事件总线 eventBus

## 思路

     利用的是观察者模式/发布订阅模式，常用的 api 有$on,$emit,$off

## 使用方法

- 在 main.js 里面

  ```js
  //事件总线
  Vue.prototype.$bus = new Vue()
  ```

## 使用技巧

- 初始化

  父组件或者兄弟组件的$on,必须在子组件或其他兄弟组件的声明周期之前，否则看不到监听效果，要在父组件加上nextTick包裹$on

  **代码演示**

  ```js
  //Parent.vue
  created() {
      this.$bus.$on('bus', (value) => {
      console.log(value, 'pppp')
      })
  },
  //Son1.vue
  mounted() {
      console.log('son1')
      this.$bus.$emit('bus', 7777)
      this.$bus.$emit('xd', 'hahahaha')
  },
  ```

- 方法里面

  正常使用即可

  **代码演示**

  ```js
  //Son1.vue
  methods:{
      busHandle() {
      this.$bus.$emit('xd', 7777)
      }
  }
  //Son2.vue
  created() {
      // console.log('son2', 'child')
      this.$bus.$on('xd', (value) => {
      console.log('value', value)
      })
  },
  ```
