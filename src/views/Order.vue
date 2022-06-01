<template>
  <div>
      我是结算页
  </div>
</template>

<script>
import {getloacalStore} from '@/common/until'
import {olderGet} from '@/api/order/index'
export default {
    name:'Order',
    created(){
      //如果从本地浏览器中取token值，如果没有跳转到登录页
      if(!getloacalStore('token')){
        this.$router.push('/login')
      }
       //发送请求
      var userId=getloacalStore('userId');
      olderGet(userId).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>

<style lang='less' scoped>

</style>