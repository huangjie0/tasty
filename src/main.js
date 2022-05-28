import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import VueRouter from 'vue-router' 
import store from '@/store/index'

Vue.config.productionTip = false
//防止路由连续跳转的情况底层处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

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
