import Vue from 'vue'
import login from './login.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)


Vue.config.productionTip = false

new Vue({
  render: h => h(login)
}).$mount('#app')
