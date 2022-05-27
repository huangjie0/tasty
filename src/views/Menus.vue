<template>
  <div class="menus">
    <div class="menus_1">
      <div class="menus_title">
        <div class="restaurant_1">
          <div class="restaurant_1_title">{{}}</div>
          <div class="restaurant_2_title">面类</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入发请求模块
import menusget from '@/api/menus/index.js'
import {setloacalStore} from '@/common/until.js'

export default {
    name:"Menus",
    data() {
      return {
        //页面数据
        restaurantTitle:{}
      }
    },
    computed:{
       restaurantTitle_1(){
         return this.restaurantTitle
      }
    },
    created(){
      //获取餐馆的id值
      const {id} = this.$route.params
      //根据所传来的id进行发请求进行渲染页面
      menusget(id).then(res=>{
        //成功后将用户信息存入浏览器本地中
        // .......
//-----------------------------------------------------
        console.log(res)
        this.restaurantTitle = res.data
        console.log(this.restaurantTitle)

      })
    }
}
</script>
<style lang='less' scoped>
.menus{
  position: relative;
  top: 100px;
  .menus_1{
    min-height: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .menus_title{
      position: absolute;
      top: 80px;
      width: 100%;
      height: 100px;
      .restaurant_1{
        width: 40%;
        height: 100px;
        .restaurant_1_title{
          font-size: 35px;
          font-weight: 600;
        };
        .restaurant_2_title{
          font-size: 20px;
          color: rgb(153, 153, 153);
        }
      }
    }
  }
}
</style>