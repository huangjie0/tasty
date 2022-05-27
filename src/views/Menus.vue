<template>
  <div class="menus">
    <div class="menus_1">
      111
    </div>
  </div>
</template>

<script>
//导入发请求模块
import menusget from '@/api/menus/index.js'

export default {
    name:"Menus",
    created(){
      const {id} = this.$route.params
      menusget(id).then(res=>{
        console.log(id)
      })
    }


}
</script>
<style lang='less' scoped>
.menus{
  position: relative;
  top: 100px;
  min-height: calc(100vh-45px);
  background-color: red;
  .menus_1{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>