<template>
  <div class="headerright">
      <img class="img_2" src="@/assets/profile-icon.png" alt="">
  </div>
</template>

<script>
export default { 
    name:'HeaderRight',

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