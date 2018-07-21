import Vue from 'vue'
import App from './App'
import router from './router.config'
import '../../packages/spui-css/src/index.css'
import spui from '../../src/index.js'
import '../assets/docs.css'

Vue.use(spui)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    el: '#app-container',
    router,
    components: { App },
    template: '<App/>'
})


import isMobile from './is-mobile'
// 是否为生产环境
const isProduction = process.env.NODE_ENV === 'production'
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }
  // 获取不同环境下，移动端Demo对应的地址
  const pathname = isProduction ? '/spui/mobile' : '/mobile.html'
  // 如果设备环境为移动端，则直接加载移动端Demo的地址
  if (isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})
