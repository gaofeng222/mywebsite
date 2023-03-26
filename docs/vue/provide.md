# vue 中的 provide& inject

跨组件通信传输数据的方法,父组件把自己暴露给子孙组件，子孙组件可以获取或操作父组件上的方法和属性

```js
//parent.vue
···
data(){
    return {
       smoke:"no-smoke" //1.这样传递的数据不是响应式的
       obj:{
        smoke:"no-smoke"  //1.这样传递的数据是可响应式的
       }
    }
},
provide() {
    return {
      smoke: this.smoke,   //1.这样传递的数据不是响应式的
      parent: this,  //如果要实现子孙组件的响应性，直接传递整个父组件，再从上面获取
                    // 或者写成函数形式 smoke: () => this.smoke
      obj:this.obj
    }
  },
···


//G2.vue

···
inject: ['parent', 'smoke'],  //通过this获取
···

```

## 官方解释

上面注释 1 那里这种方法传递过来的数据是没有响应性的，当你改变父组件中的 smoke 时，子组件中接收的 smoke 并不会改变。

官方解释：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。

## 总结

主要解决深层次的组件嵌套，祖先组件向子孙组件之间传值。  
一层嵌套的父子组件可以使用 props 来传值，props 本身就是有相应性的。  
根据自身代码选择合适的传值方式，并不一定非要用 provide/inject 的传值。
