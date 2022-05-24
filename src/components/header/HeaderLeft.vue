<template>
  <div class="headerleft">
      <img class="img_1" src="@/assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
    name:'HeaderLeft',

}
</script>
<style scoped lang='less'>
.headerleft{
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  .img_1{
    height: 60px;
  }
}
</style>