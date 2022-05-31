<template>
  <div class="headerleft" @click='toRestaurant'>
      <img class="img_1" src="@/assets/image/logo.png" alt="">
  </div>
</template>

<script>
export default {
    name:'HeaderLeft',
    methods:{
      toRestaurant (){
        this.$router.push('/restaurant')
      }
    }

}
</script>
<style scoped lang='less'>
.headerleft{
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .img_1{
    height: 60px;
  }
}
</style>