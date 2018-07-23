## world
**worl**
### 基本用法

```html
<template>
  <div class="hello-page">
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
  }
}
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 文本信息    | string   | — | — |
