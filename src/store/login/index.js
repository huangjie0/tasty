import {getloacalStore} from '@/common/until'
export default {
    mutations:{
        //清空state里面的数据
        
    },
    actions:{},
    state:{
        users:getloacalStore('users') || {},
    },
    getters:{}
}