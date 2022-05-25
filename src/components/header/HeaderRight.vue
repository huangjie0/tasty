<template>
  <div class="headerright" @click="tobounced">
      <img class="img_2" src="@/assets/profile-icon.png" alt="">
      <SmallMask v-if="isbounced" class="bounced_position" @toExitLogin='toExitLogin' @exitBounced='exitBounced'/>
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
        isbounced:false
      }
    },
    methods:{
      tobounced(){
        this.isbounced=true
      },
      toExitLogin(){
        this.isbounced=false
      },
      exitBounced(){
        this.isbounced=false
      }
    }
}
</script>

<style lang='less' scoped>
.bounced_position{
  position: absolute;
  top: 30px;
  right: 70px;
}
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