import Vue from 'vue'
import App from './App.vue'
// import{Menu} from 'ant-design-vue'
Vue.config.productionTip = false
// Vue.use(Menu)
new Vue({
  render: h => h(App),
}).$mount('#app')
