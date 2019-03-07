// 引入vue
import Vue from 'vue'
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
//引入重置样式表
import './assets/css/reset.css'
//引入字体图标样式
import './assets/css/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
