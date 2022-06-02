<template>
  <div>
    <div class="order">
        <div class="order_1"> 
            <div class="order_left">
                <div class="history_order">
                  历史订单
                  <div class="underline">
                  </div>
                </div>
            </div>
            <OrderList :restaurantList="restaurantList"/>
        </div>
    </div>
  </div>
</template>

<script>
import {getloacalStore,removelocalStore} from '@/common/until'
import {olderGet} from '@/api/order/index'
import OrderList from '@/views/order/OrderList.vue'
export default {
    name:'Order',
    data() {
      return {
        restaurantList:[]
      }
    },
    components:{
      OrderList
    },
    created(){
      //如果从本地浏览器中取token值，如果没有跳转到登录页
      if(!getloacalStore('token')){
        this.$router.push('/login')
      }
       //发送请求
      var userId=getloacalStore('userId');
      olderGet(userId).then(res=>{
        this.restaurantList = res.data
      }).catch(err=>{
        // 在请求发成功时执行异步操作
        if(err.response.data.code=='auth-failed'){
          //提示用户重复登录的信息
          alert('用户过期,请重新登录!');
          // 跳转到登录页面
          this.$router.push('/login');
          //同时清理用户的user信息
          removelocalStore('users');
        }
      })
    }
}
</script>

<style lang='less' scoped>
.order{
  position: relative;
  top: 100px;
  .order_1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .order_left{
      width: 30%;
      font-size: 50px;
      font-weight: 1000;
      .history_order{
        position: absolute;
        top: 20px;
        left: 20px;
        .underline{
          position: absolute;
          top: 65px;
          width: 50px;
          height: 8px;
          background-color: black;
        }
      }

    }
  }
}

</style>