import Vue from "vue";
import Vuex from 'vuex'
import login from '@/store/login/index'
import loading from '@/store/loading/index'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        loading,
        login
    }
})
export default store