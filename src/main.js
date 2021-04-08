import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入按钮样式
import '@/assets/Button.css'

Vue.config.productionTip = false
// 引入elementui
import ElementUI from 'element-ui'
// 引入自定义vue主题
import '../static/css/theme/index.css';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
// 引入vuex
import store from "@/store/store";

Vue.use(ElementUI)
Vue.use(dataV)


new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app')




