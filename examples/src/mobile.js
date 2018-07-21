import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileApp from './MobileApp'
import Vui from 'src/index'
import isMobile from './is-mobile.js'
import registerRoute from './router.config'
import navConfig from './nav.config'
import 'packages/spui-css/src/index.css'
import DemoList from './components/demo-list.vue'

Vue.use(Vui)
Vue.use(VueRouter)
const routesConfig = registerRoute(navConfig, true)
routesConfig.push({
  path: '/',
  component: DemoList
})
const router = new VueRouter({
  routes: routesConfig
})

const isProduction = process.env.NODE_ENV === 'production'
// const router = new VueRouter({
//   base: isProduction ? '/spui/' : __dirname,
//   routes: [{
//     path: '/component/hello',
//     component: Hello
//   }]
// })
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }
  const pathname = isProduction ? '/spui/' : '/'
  if (!isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})

/* eslint-disable */
new Vue({
  el: '#app-container',
  router,
  components: { MobileApp },
  template: '<MobileApp/>'
})
