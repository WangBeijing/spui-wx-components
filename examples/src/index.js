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

