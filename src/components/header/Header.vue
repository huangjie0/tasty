<template>
  <div class="header">
      <HeaderLeft/>
      <HeaderRight/>
  </div>
</template>

<script>
import HeaderLeft from '@/components/header/HeaderLeft.vue'
import HeaderRight from '@/components/header/HeaderRight.vue'
export default {
    name:'Header',
    components:{
        HeaderLeft,
        HeaderRight
    }
}
</script>

<style scoped lang='less'> 
.header{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 53px;
    position: relative;
}
</style>