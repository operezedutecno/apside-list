import Vue from 'vue'
import List from './List.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify expor

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(List, { props:{ url: 'https://jsonplaceholder.typicode.com/users', titles: [ 'id', 'name', 'username', 'email' ]} }),
}).$mount('#app')
