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
import {setloacalStore} from '@/common/until.js'

export default {
    name:"Menus",
    created(){
      //获取餐馆的id值
      const {id} = this.$route.params
      //根据所传来的id进行发请求进行渲染页面
      menusget(id).then(res=>{
        //成功后将用户信息存入浏览器本地中
        console.log(res)
        console.log(res.data.foods[1])
        setloacalStore('restaurant',res.data.foods)
        

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