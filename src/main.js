import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入按钮样式
import '@/assets/Button.css'
Vue.config.productionTip = false
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Vuex from 'vuex'
//引入elementui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.use(Vuex)
Vue.use(L);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')




