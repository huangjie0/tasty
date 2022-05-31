<template>
  <div class="loading">
      <div class="loading_1">
          <img src="@/assets/image/loading.gif" alt="">
      </div>
  </div>
</template>

<script>
export default {
    //全局的loading加载页面
    name:'loading'
}
</script>

<style lang='less' scoped>
.loading{
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    .loading_1{
        position: fixed;
        top: 50%;
        left: 50%;
        bottom: 50%;
        right: 50%;
    }
}
</style>