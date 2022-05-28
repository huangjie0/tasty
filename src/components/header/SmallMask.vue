<template>
  <div class="bounced">
      <div class="orders" @click.stop="oreders" v-if="isOrder">查看订单情况</div>
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
import {mapMutations} from 'vuex'
export default {
    name:'SmallMask',
    methods:{
      //调用mapMutations里面的方法
      ...mapMutations(['clearUser']),
      oreders(){
        this.$router.push('/order')
      },
      tologin(){
        //跳转到登录页面
        this.$router.push('/login')
      },
      toExitLogin(){
        //当点击退出按钮，将用户消息清空和token清空
        removelocalStore('users')
        removelocalStore('token')
        //将vuex中数据清空
        this.clearUser()
        //清空完返回到登录页面
        this.$router.push('/login')
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
      //判断路由是否时login页面
      if(this.$route.path=='/login'){
        this.isLogin=false
        this.isExit=false
        this.isOrder=false
      }
      //从当地浏览器中去users值，如果有，登录取消，否则将其他两个设为true
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
.bounced{
  z-index: 2;
  position: absolute;
  top: 30px;
  right: 70px;
}

.orders{
  width: 280px;
  height: 50px;
  border-radius: 50px;
  background-color: black;
  color: white;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.exit{
    width: 280px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid rgb(165, 165, 165);
    line-height: 50px;
    text-align: center;
    font-size: 20px;
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
      font-size: 18px;
    }
    .bounced_r{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
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
    font-size: 20px;
  }
}
</style>