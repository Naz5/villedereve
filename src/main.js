import './styles/site.scss';
import Vue from 'vue'
import App from './App.vue'
import VueImg from 'v-img';

import router from './router'
import store from "@/store";

Vue.config.productionTip = false;
Vue.use(VueImg);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
