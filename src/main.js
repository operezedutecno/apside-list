import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify expor


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App, {props:{ 'url': 'https://jsonplaceholder.typicode.com/posts'}}),
}).$mount('#app')
