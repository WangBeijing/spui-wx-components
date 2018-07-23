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

## 3.发布npm 

- **打包**入口`./src/index.js`，出口`./lib/index.js`
- `lib/spui.js`此文件是`publish`到npm上的

## 4.使用教程
```html
import Vue from 'vue'
import spui from 'spui-wx-components'
Vue.use(spui)
import 'spui-wx-components/lib/spui-css/index.css'
```