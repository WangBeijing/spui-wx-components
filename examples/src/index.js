
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import registerRoute from './router.config'
import navConfig from './nav.config'
import isMobile from './is-mobile'
import spui from '@/index.js'
import 'packages/spui-css/src/index.css'
import '../assets/docs.css'
import Intro from '../docs/intro.md'

Vue.config.productionTip = false
Vue.use(spui)
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
routesConfig.push({
  path: '/component/intro',
  component: Intro
})
console.log(routesConfig)
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
    console.log(pathname)
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
