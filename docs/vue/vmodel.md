# vue 中的 v-model 与 sync

## 区别

.sync 可以用任意的变量 子组件的事件是 update 等,父组件可以有多个 sync
v-model 只能是 value 子组件的事件是 input，父组件只能有一个 v-model

## 代码上的区别

```js
    <!-- this.$emit('input', 200) -->  //子组件的this.$emit()
    <!-- <Son1 :value="mny" @input="(value) => (mny = value)"></Son1> -->
    <!-- this.$emit('input:value', 200) -->//子组件的this.$emit()
    <!-- <Son1 :value="mny" @input:value="(value) => (mny = value)"></Son1> -->
    <!-- this.$emit('update:value', 200) -->//子组件的this.$emit()
    <!-- <Son1 :value="mny" @update:value="(value) => (mny = value)"></Son1> -->
    <!-- this.$emit('update:aaa', 200) -->//子组件的this.$emit()
    <!-- <Son1 :aaa="mny" @update:aaa="(value) => (mny = value)"></Son1> -->
    <!-- this.$emit('update:aaa', 200) -->//子组件的this.$emit()
    <!-- <Son1 :aaa.sync="mny" /> -->
    <!-- <Son1 :aaa.sync="mny" /> -->
    <!-- this.$emit('input', 200) -->//子组件的this.$emit()
    <Son1 v-model="mny" />
```
