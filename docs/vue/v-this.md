# 关于 Vue 中 beforeRouteEnter、beforeCreate、Created 的执行时机&this 在这三者中的值

## 引子

```js
beforeRouteEnter(to, from, next) {
  console.log("beforeRouteEnter", this);
  next();
},

beforeCreate() {
  console.log("beforeCreate中的this", this);
  console.log("beforeCreate中this.alist", this.alist);
},
created() {
  console.log("created中的this", this);
  console.log("created中this.alist", this.alist);
  this.location();
},

```

## 分析

- 首先从执行时机来看

beforeRouteEnter>beforeCreate>created

- this 在这三者中的值

beforeRouteEnter
此时组件还没有被创建，所以不能通过 this 拿到当前的组件实例，页面显示 this 的值为 undefind 。

beforeCreated

beforeCreate 中可以获取到 this，但是此时实例未初始化只能获取到 this 对象内以$开头的键值，若访问 data 中的属性时，会返回 undefind 。

Created
Created 中可以获取到 this，并且可以获取到 this 中 data 的值

beforeRouteEnter 通过 next 函数传值

```js
import $axios from 'axios'
data() {
  return {
    alist: [],
  };
},
async beforeRouteEnter(to, from, next) {
  const {
    data: { data },
  } = await $axios.get(`http://127.0.0.1:3000/api/blog/list/1`);
  next((vm)=>vm.location(data));
},
methods: {
  location(data) {
    this.alist = data;
  },
}
```

## 结语

解析：

vm ：vue 实例

注意：先 beforeRouteEnter 中调用 axios 请求参数时，不能使用 mine 中定义的全局的 axios 如：this.$axios，因为此时在 beforeRouteEnter 中 this 还没有被定义，我们可以使用局部引入解决这个问题：在组件中定义：import $axios from 'axios'
