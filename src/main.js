import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  // 挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
