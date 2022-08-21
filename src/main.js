import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueToastify from "vue-toastify";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


Vue.use(VueToastify, {
  successDuration: 2000,
  errorDuration: 2000,
  position: "bottom-center",
});

Vue.use(Vuesax, {
  // options here
})
import JsonViewer from 'vue-json-viewer'

// Import JsonViewer as a Vue.js plugin
Vue.use(JsonViewer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
