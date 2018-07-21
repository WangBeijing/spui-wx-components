// import Vue from 'vue'
// import App from './App'
// import VueRouter from 'vue-router'
// // import router from './router.config'
// import '../../packages/spui-css/src/index.css'
// import spui from '../../src/index.js'
// import '../assets/docs.css'
// import registerRoute from './router.config'
// import navConfig from './nav.config'
// import isMobile from './is-mobile'

// Vue.config.productionTip = false
// Vue.use(spui)

// const routesConfig = registerRoute(navConfig)
// const router = new VueRouter({
//   routes: routesConfig
// })

// // 是否为生产环境
// const isProduction = process.env.NODE_ENV === 'production'
// router.beforeEach((route, redirect, next) => {
//   if (route.path !== '/') {
//     window.scrollTo(0, 0)
//   }
//   // 获取不同环境下，移动端Demo对应的地址
//   const pathname = isProduction ? '/spui/mobile' : '/mobile.html'
//   // 如果设备环境为移动端，则直接加载移动端Demo的地址
//   if (isMobile) {
//     window.location.replace(pathname)
//     return
//   }
//   document.title = route.meta.title || document.title
//   next()
// })

// /* eslint-disable */
// new Vue({
//   el: '#app-container',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import registerRoute from './router.config'
import navConfig from './nav.config'
import isMobile from './is-mobile'
import Vui from 'src/index.js'
import 'packages/spui-css/src/index.css'
import '../assets/docs.css'

Vue.config.productionTip = false
Vue.use(Vui)
Vue.use(VueRouter)

const routesConfig = registerRoute(navConfig)
const isProduction = process.env.NODE_ENV === 'production'
routesConfig.push({
  path: '/',
  redirect: '/component/intro'
})
routesConfig.push({
  path: '/component',
  redirect: '/component/intro'
})

const router = new VueRouter({
  base: isProduction ? '/' : __dirname,
  routes: routesConfig
})
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }

  const pathname = '/mobile.html'
  if (isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app-container',
  router,
  components: { App },
  template: '<App/>'
})
