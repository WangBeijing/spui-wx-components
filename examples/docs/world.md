## world
**world world 组件，Hello 组件，Hello 组件**
### 基本用法

```html
<template>
  <div class="hello-page">
    <v-hello message="my component library" @click="handleClick"></v-hello>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick (msg) {
      this.msg = msg
    }
  }
}
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 文本信息    | string   | — | — |
