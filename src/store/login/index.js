import {getloacalStore} from '@/common/until'
export default {
    mutations:{
        //清空state里面的数据
        clearUser(state){
            state.users={} 
        }
    },
    actions:{},
    state:{
        users:getloacalStore('users') || {},
    },
    getters:{}
}