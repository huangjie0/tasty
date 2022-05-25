<template>
  <div class="login">
    <LoginMask v-if="isShow" @isConfirm='isConfirm' @cancelBounced='cancelBounced'/>
    <LoginPage @maskClick='maskClick'/>
  </div>

</template>

<script>
import LoginPage from '@/views/login/LoginPage.vue'
import LoginMask from '@/views/login/Mask.vue'

export default {
    name:'Login',
    components:{
      LoginPage,
      LoginMask,
    },
    methods:{
      maskClick(){
        //当用户点击登录的按钮所触发的事件
        this.isShow=true
      },
      isConfirm(){
        this.isShow=false
      },
      cancelBounced(){
        //当用户点击取消了注册，将弹框取消
        this.isShow=false
      }
    },
    data() {
      return {
        //初始化的弹框的页面是关闭的
        isShow:false
      }
    },
}
</script>

<style lang='less' scoped>
.login{
  position: relative;
  top: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>