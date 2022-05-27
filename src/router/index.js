import Vue from "vue";
import VueRouter from "vue-router";
import {getloacalStore} from '@/common/until'
Vue.use(VueRouter)
const vueouter = new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/',
                redirect:'/restaurant'
            },
            {
                path:'/restaurant',
                name:'restaurant',
                component:()=>import('@/views/Restaurant.vue'),
                meta:{
                    isin:false
                }
            },
            {
                path:'/login',
                name:'login',
                component:()=>import('@/views/Login.vue'),
                meta:{
                    isin:false
                }
            },
            {
                path:'/order',
                name:'order',
                component:()=>import('@/views/Order.vue'),
                meta:{
                    isin:true
                }
            },
            {
                path:'/menus/:id',
                name:'menus',
                component:()=>import('@/views/Menus.vue'),
                meta:{
                    isin:false
                }
            }
        ]
    }
) 
vueouter.beforeEach((to,from,next)=>{
    if(!to.meta.isin){
        next()
    }else{
        if(getloacalStore('token')){
           next()
        }else{
            next('/login')
        } 
    }
})
export default vueouter