import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import VueRouter from 'vue-router' 
import store from '@/store/index'
import 'animate.css';

Vue.config.productionTip = false
//防止路由连续跳转的情况底层处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
//全局引入vue过滤器
Vue.filter('currencyUSD',function(value){
  return '$'+ value/100
})

new Vue({
  //在全局组件创建时候挂载$bus
  created(){
    //往原型对象上挂载$bus
    Vue.prototype.$bus=this
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
