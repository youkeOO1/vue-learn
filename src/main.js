import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

new Vue({
  // 挂载路由
  router,
  // 挂载vuex
  store,
  render: h => h(App),
}).$mount('#app')
