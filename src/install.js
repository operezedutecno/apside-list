import List from "./App.vue";
import vuetify from '@/plugins/vuetify'

const ApsideList = {
  install(Vue) {
    Vue.component("apside-list", List);
  },
  vuetify
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ApsideList);
}

export default ApsideList;
