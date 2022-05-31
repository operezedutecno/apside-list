import Vue from 'vue'
import List from './List.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify expor

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(List, { props:{ url: 'https://jsonplaceholder.typicode.com/users', 
        titles: [
          { text: 'Id', value: 'id'},
          { text: 'Nombre', value: 'name'},
          { text: 'Correo electrónico', value: 'email'},
          { text: 'Usuario', value: 'username' } 
        ]
      } 
  }),
}).$mount('#app')
