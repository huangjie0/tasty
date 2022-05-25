export default {
    state:{
        //起始的状态是关闭的
        isLoading:false
    },
    getters:{},
    actions:{},
    mutations:{
        //当调用这个函数是打开loading
        openLoading(state){
            state.isLoading=true
        },
        closeLoading(state){
            state.isLoading=false
        }
    }
}