import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入按钮样式
import '@/assets/Button.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

