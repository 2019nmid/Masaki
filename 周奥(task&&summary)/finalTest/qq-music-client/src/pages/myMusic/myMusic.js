import Vue from 'vue'
import myMusic from './myMusic.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)


Vue.config.productionTip = false

new Vue({
  render: h => h(myMusic)
}).$mount('#app')
