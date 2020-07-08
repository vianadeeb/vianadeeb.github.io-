import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h("router-view")
}).$mount('#app')
