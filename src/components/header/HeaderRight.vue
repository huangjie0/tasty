<template>
  <div class="headerright" @click="bouncedClick">
      <img class="img_2" src="@/assets/profile-icon.png" alt="">
      <SmallMask v-if="isBounced" class="bounced_position" @hiddleBounced='hiddleBounced'
      />
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
        this.isBounced=true
      },
      hiddleBounced(){
        this.isBounced=false;
        console.log(this.isBounced)
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