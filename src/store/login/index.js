import {getloacalStore} from '@/common/until'
export default {
    mutations:{},
    actions:{},
    state:{
        users:getloacalStore('users') || {},
    },
    getters:{}
}