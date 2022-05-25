<template>
  <div class="bounced">
      <div class="orders" @click="oreders" v-if="isOrder">查看订单情况</div>
      <div class="login_bounced" @click="tologin" v-if="isLogin">登录</div>
      <div class="login_bounced_1">
        <div class="bounced_l">中</div>
        <div class="bounced_r">En</div>
      </div>
      <div class="exit" @click="toExitLogin" v-if="isExit">退出</div>
  </div>
</template>

<script>
import {getloacalStore,removelocalStore} from '@/common/until'
import {} from 'vuex'
export default {
    name:'SmallMask',
    methods:{
      oreders(){
        //路由跳转到订单页面中
        this.$router.push('/order')
      },
      tologin(){
        //向父组件发射要关闭弹框的回调函数
        this.$emit('exitBounced')
        //跳转到登录页面
        this.$router.push('/login')
      },
      toExitLogin(){
        //当点击退出按钮，将用户消息清空和token清空
        removelocalStore('users')
        removelocalStore('token')
        //将vuex中数据清空

        //清空完返回到登录页面
        this.$router.push('/login')
        //当用户点击退出按钮，会关闭弹框
        this.$emit('toExitLogin')
      }
    },
    data() {
      return {
        isLogin:true,
        isExit:true,
        isOrder:true,
      }
    },
    //当组件创建的时候所执行的函数
    created(){
      if(getloacalStore('users')){
        this.isLogin = false
      }else{
        this.isExit=false
        this.isOrder=false
      }
    }
}
</script>

<style lang='less' scoped>
.orders{
  width: 280px;
  height: 50px;
  border-radius: 50px;
  background-color: black;
  color: white;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
}
.exit{
    width: 280px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid rgb(165, 165, 165);
    line-height: 50px;
    text-align: center;
    font-size: 25px;
}
.bounced{
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .login_bounced_1{
    width: 280px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bounced_l{
      width: 50px;
      height: 50px;
      background-color: black;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
    }
    .bounced_r{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      border:2px solid rgb(148, 148, 148);
    }
  }
  .login_bounced{
    width: 280px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid rgb(165, 165, 165);
    line-height: 50px;
    text-align: center;
    font-size: 25px;
  }
}
</style>