<template>

  <div class="login">
    <LoginMask v-if="isShow" @isconfirm='isconfirm'/>
    <LoginPage @maskclick='maskclick'/>
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
      maskclick(){
        this.isShow=true
      },
      isconfirm(){
        this.isShow=false
      }

    },
    data() {
      return {
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