## Hello
**Hello 组件，Hello 组件，Hello 组件，Hello 组件**
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
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | — |


## 1.npm script命令
```html
npm install
# 启动项目
npm run dev 
# 打包js
npm run build:spui
# 打包css
npm run build:spui-css
```

## 2.发布打包，文件说明

### 执行`npm run build:spui`命令后examples/dist目录下
```html
.examples
    ├──dist
            ├──index.html                        pc官网入口
            ├──mobile.html                       移动端入口
            ├──manifest.min.hash.js
            ├──spui-mobile.hash.css              移动端css
            ├──spui-mobile.min.hash.js           移动端js
            ├──spui.hash.css                     pc官网css
            ├──spui.min.hash.js                  pc官网js
            └──vendor.min.hash.js
```
### 执行`npm run build:spui`命令后lib目录下
```html
.lib
  ├──spui.js
```
### 分包css，执行`npm run build:spui-css`命令后lib/spui-css目录下
```html
.lib
    ├──spui-css
            ├──index.css                    
            └──world.css
```