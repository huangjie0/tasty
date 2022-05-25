<template>
  <div class="headerright" @click="bouncedClick">
      <img class="img_2" src="@/assets/profile-icon.png" alt="">
      <SmallMask v-if="isBounced"/>
  </div>
</template>

<script>
import  SmallMask from '@/components/header/SmallMask'
export default { 
    name:'HeaderRight',
    components:{
      SmallMask
    },
    data() {
      return {
        isBounced:false
      }
    },
    methods:{
      bouncedClick(){
        //判定状态是否是开启和关闭再进行操作
        if(!this.isBounced){
          this.isBounced=true
        }else{
          this.isBounced=false
        }
      },
    }
}
</script>

<style lang='less' scoped>
.headerright{
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img_2{
    height: 60px;
  }
}
</style>