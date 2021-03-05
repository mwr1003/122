import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'

import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
// 引入
import './styles/index.less'
import 'amfe-flexible'
// 注册组件库
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
